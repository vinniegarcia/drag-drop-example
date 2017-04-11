
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducer'



const middlewares = []

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

/**
 * Using Redux DevTools Chrome Extension: https://github.com/zalmoxisus/redux-devtools-extension
 * Recommended tool by Redux, requires no integration or additional packages within code.
 */
export default createStoreWithMiddleware(
  reducers, window.devToolsExtension && window.devToolsExtension()
)
