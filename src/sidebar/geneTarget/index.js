import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import { ItemTypes } from '../../constants/';
import { DropTarget } from 'react-dnd';
import classnames from 'classnames';
import './genes.css'
import GeneCard from '../../content/geneCard/'
import * as actions from '../../data/actions'

const geneTarget = {
  drop(props, monitor, component) {
    // Obtain the dragged item
    const item = monitor.getItem()
    props.dispatch(actions.dropGene(item))
    return {
        moved: item
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class Genes extends Component {
    renderGene = (gene) => (<GeneCard id={gene.get('id')} />)

    render () {
        const { connectDropTarget, isOver, genes } = this.props;
        const classes = classnames({
            'gene-drop': true,
            'gene-drop-over': isOver
        })
        return connectDropTarget(
            <div className="genes">
                <h3>Genes</h3>
                <div className={classes}>
                    { genes.size > 0 ? genes.map(this.renderGene) : 'Drop genes here' }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ($$state, ownProps) => {
    return {
        genes: $$state.get('genes')
    }
}


export default connect(mapStateToProps)(DropTarget(ItemTypes.GENE, geneTarget, collect)(Genes))