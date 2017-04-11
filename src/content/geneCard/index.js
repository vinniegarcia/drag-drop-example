import React, {Component} from 'react'
import './geneCard.css'
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../../constants/'
import classnames from 'classnames'

const geneSource = {
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

class GeneCard extends Component {
    render () {
        const { id, connectDragSource, isDragging } = this.props;
        const classes = classnames({
            'gene-card': true,
            'dragging': isDragging
        })
        return connectDragSource(
            <span className={classes}>
                {id}
            </span>
        )
    }
}

export default DragSource(ItemTypes.GENE, geneSource, collect)(GeneCard)