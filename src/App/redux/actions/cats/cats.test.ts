import {getCats, setPage} from './cats'

describe('Cats actions test', () => {
	test('SET_PAGE action', () => {
		const payload: any = {
			data: [{
				breeds: [],
				categories: [{id: 5, name: 'boxes'}],
				id: 'e9',
				url: 'https://cdn2.thecatapi.com/images/e9.jpg',
				width: 1280,
				height: 855,
			}]
		}
		const action = setPage(payload)
		expect(action).toEqual({
			 payload: payload,
			 type: 'SET_PAGE'
		 })
	})
	test('GET_CATS action', () => {
		const payload =  [{
			breeds: [],
			categories: [{id: 5, name: 'boxes'}],
			id: 'e9',
			url: 'https://cdn2.thecatapi.com/images/e9.jpg',
			width: 1280,
			height: 855,
		}]
		const action = getCats(payload)
		expect(action).toEqual({
			 payload: payload,
			 type: 'GET_CATS'
		 })
	})
})

