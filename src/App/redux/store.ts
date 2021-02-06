import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import catReducer from './reducers/catReducer/catReducer'
import categoriesReducer from './reducers/categoriesReducer/categoriesReducer'

const rootReducer = combineReducers({
  cats: catReducer,
  categories: categoriesReducer
})

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)
