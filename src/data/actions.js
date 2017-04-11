import { fromJS } from 'immutable'

export const GENE_DROPPED = 'GENE_DROPPED'
export const ALTERATION_DROPPED = 'ALTERATION_DROPPED'

export const dropGene = (gene) => {
    return ({
        type: GENE_DROPPED,
        payload: fromJS(gene)
    })
}

export const dropAlteration = (alteration) => {
    return ({
        type: ALTERATION_DROPPED,
        payload: fromJS(alteration)
    })
}