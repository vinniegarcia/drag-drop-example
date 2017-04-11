import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Set } from 'immutable'
import classnames from 'classnames'
import { DropTarget } from 'react-dnd'
import * as actions from '../../data/actions'
import { ItemTypes } from '../../constants/'
import AlterationCard from '../../content/alterationCard/'
import './alterationTarget.css'

const alterationTarget = {
    drop (props, monitor, component) {
        // Obtain the dragged item
        const item = monitor.getItem()
        props.dispatch(actions.dropAlteration(item))
        return {}
    }
}

const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
})

class AlterationTarget extends Component {

    static propTypes = {
        isOver: PropTypes.bool,
        connectDropTarget: PropTypes.func,
        alterations: PropTypes.instanceOf(Set),
        onRemove: PropTypes.func
    }

    renderAlt = (alt) => (<AlterationCard id={alt.get('id')} key={alt.get('id')} onRemove={this.props.onRemove(alt)} />)

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