import React, { Component } from 'react'
import GeneTarget from './geneTarget/'
import AlterationTarget from './alterationTarget/'
import './sidebar.css'

class Sidebar extends Component {
    render () {
        return (
            <div className="sidebar">
                <GeneTarget />
                <AlterationTarget />
            </div>
        )
    }
}

export default Sidebar;