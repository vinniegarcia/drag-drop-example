import React, {Component} from 'react'
import { DragSource } from 'react-dnd'
import classnames from 'classnames'
import { ItemTypes } from '../../constants/'
import './alterationCard.css'

const alterationSource = {
  beginDrag(props) {
    return {
        id: props.id
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class AlterationCard extends Component {
    render () {
        const { id, connectDragSource, isDragging } = this.props;
        const classes = classnames({
            'alteration-card': true,
            'dragging': isDragging
        })
        return connectDragSource(
            <span className={classes}>
                {id}
            </span>
        )
    }
}

export default DragSource(ItemTypes.ALTERATION, alterationSource, collect)(AlterationCard)