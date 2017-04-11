import React, {Component} from 'react'
import './alterationCard.css'
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../../constants/'
import classnames from 'classnames'

const alterationSource = {
  beginDrag(props) {
    return {
        id: props.id
    };
  }
};

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