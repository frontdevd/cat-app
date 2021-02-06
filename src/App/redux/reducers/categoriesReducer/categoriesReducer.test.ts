import categoriesReducer from './categoriesReducer'
import {ICategories} from '../../../interfaces'

describe('Categories Reducer actions', () => {
	test('Test GET_CATEGORIES / SET_CATEGORY actions', () => {
		const initializeState: ICategories = {
			items: [],
			loader: true,
			activeCategory: 5,
		}
		
		const action = {
			type: 'GET_CATEGORIES/SET_CATEGORY',
			payload: {
				items: [{
					id: 1,
					name: 'cat',
				}],
				activeCategory: 5,
				loader: false,
			}
		}
		const newState = categoriesReducer(initializeState, action)
		expect(newState).toEqual({
				items: [],
			 activeCategory: 5,
			 loader: true,
		 })
	})
})
