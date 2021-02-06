import catReducer from './catReducer'
import {ICats} from '../../../interfaces'

describe('Cats Reducer action', () => {
	test('Test GET_CATS / SET_PAGE actions', () => {
		const initializeState: ICats  = {
			items: [],
			loader: true,
			currentPage: 2
		}
		const action = {
			type: 'GET_CATS/SET_PAGE',
			payload: {
				items: [{
					breeds: [],
					categories: [{id: 5, name: 'boxes'}],
					id: 'cd',
					url: 'https://cdn2.thecatapi.com/images/cd.jpg',
					width: 1536,
					height: 2048,
				}],
				loader: true,
				currentPage: 2
			}
		}
		
		const newState = catReducer(initializeState, action)
		expect(newState).toEqual({
				 items: [],
				 loader: true,
				 currentPage: 2
		 })
	})
})
