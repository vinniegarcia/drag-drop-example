import { createReducer } from 'redux-immutablejs'
import { Set } from 'immutable'
import * as actions from './actions'

const initialState = {
    genes: new Set(),
    alterations: new Set()
}

export default createReducer(initialState, {
    [actions.GENE_DROPPED]: ($$state, action) => {
        const $$genes = $$state.get('genes')
        const $$newGenes = $$genes.add(action.payload)
        return $$state.set('genes', $$newGenes)
    },
    [actions.ALTERATION_DROPPED]: ($$state, action) => {
        const $$alterations = $$state.get('alterations')
        const $$newalterations = $$alterations.add(action.payload)
        return $$state.set('alterations', $$newalterations)
    }
})