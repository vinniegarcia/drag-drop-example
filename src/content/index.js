import React, {Component} from 'react'
import GeneCard from './geneCard/'
import AlterationCard from './alterationCard/'

class Content extends Component {
    render () {
        return (
            <div className="content-area">
                <div className='content-genes'>
                    <h2>Genes</h2>
                    <GeneCard id="EGFR" />
                    <GeneCard id="KRAS2" />
                    <GeneCard id="1234" />
                </div>
                <div className="content-alterations">
                    <h2>Alterations</h2>
                    <AlterationCard id="ABCD" />
                    <AlterationCard id="EFGH" />
                    <AlterationCard id="WXYZ" />
                </div>
            </div>
        )
    }
}

export default Content