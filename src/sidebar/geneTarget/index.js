import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Set } from 'immutable'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import classnames from 'classnames'
import * as actions from '../../data/actions'
import { ItemTypes } from '../../constants/'
import GeneCard from '../../content/geneCard/'
import './geneTarget.css'

const geneTarget = {
    drop (props, monitor, component) {
        // Obtain the dragged item
        const item = monitor.getItem()
        props.dispatch(actions.dropGene(item))
        return {}
    }
}

const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
})

class GeneTarget extends Component {

    static propTypes = {
        isOver: PropTypes.bool,
        connectDropTarget: PropTypes.func,
        genes: PropTypes.instanceOf(Set),
        onRemove: PropTypes.func
    }

    renderGene = (gene) => (
        <GeneCard 
            key={gene.get('id')} 
            id={gene.get('id')} 
            onRemove={this.props.onRemove(gene)} />
    )

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

export default connect(mapStateToProps)(DropTarget(ItemTypes.GENE, geneTarget, collect)(GeneTarget))