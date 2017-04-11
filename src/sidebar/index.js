import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../data/actions'
import GeneTarget from './geneTarget/'
import AlterationTarget from './alterationTarget/'
import './sidebar.css'

class Sidebar extends Component {

    static propTypes = {
        removeGene: PropTypes.func,
        removeAlteration: PropTypes.func
    }

    render () {
        const { removeGene, removeAlteration } = this.props
        return (
            <div className="sidebar">
                <GeneTarget onRemove={removeGene} />
                <AlterationTarget onRemove={removeAlteration} />
            </div>
        )
    }
}


const mapStateToProps = ($$state, ownProps) => ownProps

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeGene: (gene) => e => dispatch(actions.removeGene(gene)),
        removeAlteration:  (alt) => e => dispatch(actions.removeAlteration(alt))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)