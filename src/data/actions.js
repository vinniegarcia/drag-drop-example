import { fromJS } from 'immutable'

export const GENE_DROPPED = 'GENE_DROPPED'
export const ALTERATION_DROPPED = 'ALTERATION_DROPPED'
export const GENE_REMOVED = 'GENE_REMOVED'
export const ALTERATION_REMOVED = 'ALTERATION_REMOVED'

export const dropGene = (gene) => ({
    type: GENE_DROPPED,
    payload: fromJS(gene)
})

export const dropAlteration = (alteration) => ({
    type: ALTERATION_DROPPED,
    payload: fromJS(alteration)
})

export const removeGene = (gene) => ({
    type: GENE_REMOVED,
    payload: fromJS(gene)
})

export const removeAlteration = (alteration) => ({
    type: ALTERATION_REMOVED,
    payload: fromJS(alteration)
})