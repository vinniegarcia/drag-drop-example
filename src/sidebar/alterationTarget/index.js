import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import { ItemTypes } from '../../constants/';
import { DropTarget } from 'react-dnd';
import classnames from 'classnames';
import './alterationTarget.css'
import AlterationCard from '../../content/alterationCard/'
import * as actions from '../../data/actions'

const alterationTarget = {
  drop(props, monitor, component) {
    // Obtain the dragged item
    const item = monitor.getItem()
    props.dispatch(actions.dropAlteration(item))
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

class AlterationTarget extends Component {
    renderAlt = (alteration) => (<AlterationCard id={alteration.get('id')} />)

    render () {
        const { connectDropTarget, isOver, alterations } = this.props;
        const classes = classnames({
            'alteration-drop': true,
            'alteration-drop-over': isOver
        })
        return connectDropTarget(
            <div className="alterations">
                <h3>Alterations</h3>
                <div className={classes}>
                    { alterations.size > 0 ? alterations.map(this.renderAlt) : 'Drop alterations here' }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ($$state, ownProps) => {
    return {
        alterations: $$state.get('alterations')
    }
}


export default connect(mapStateToProps)(DropTarget(ItemTypes.ALTERATION, alterationTarget, collect)(AlterationTarget))