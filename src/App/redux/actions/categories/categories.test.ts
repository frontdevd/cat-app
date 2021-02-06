import {getCategories, setCategory} from './categories'

describe('Categories actions test', () => {
	test('GET_CATEGORIES action', () => {
		const payload: any = {
			id: 1,
			name: 'category name'
		}
		const action = getCategories(payload)
		expect(action).toEqual({
			 payload: payload,
			 type: 'GET_CATEGORIES'
		 })
	})
	
	test('SET_CATEGORY action', () => {
		const payload = 2
		const action = setCategory(payload)
		expect(action).toEqual({
			 type: 'SET_CATEGORY',
			 payload: 2
		 })
	})
})
