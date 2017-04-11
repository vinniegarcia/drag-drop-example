import React, {Component} from 'react'
import { DragSource } from 'react-dnd'
import PropTypes from 'prop-types'
import { ItemTypes } from '../../constants/'
import classnames from 'classnames'
import './geneCard.css'

const geneSource = {
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

class GeneCard extends Component {

    static propTypes = {
        id: PropTypes.string,
        connectDragSource: PropTypes.func,
        isDragging: PropTypes.bool,
        onRemove: PropTypes.func
    }

    render () {
        const { id, connectDragSource, isDragging, onRemove } = this.props;
        const classes = classnames({
            'gene-card': true,
            'dragging': isDragging
        })
        return connectDragSource(
            <div className={classes}>
                <div className="gene">{id}</div>
                { onRemove && <div className="remove fa fa-close" onClick={onRemove}></div> }
            </div>
        )
    }
}

export default DragSource(ItemTypes.GENE, geneSource, collect)(GeneCard)