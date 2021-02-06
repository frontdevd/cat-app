import {IAction, ICategories} from '../../../interfaces'
import {GET_CATEGORIES, SET_CATEGORY} from '../../actions/categories/categories'

const initializeState: ICategories = {
	items: [],
	loader: true,
	activeCategory: 5
}

export default function categoriesReducer(state: ICategories = initializeState, action: IAction) {
	switch (action.type) {
		case GET_CATEGORIES:
			return {
				...state,
				items: action.payload,
				loader: false
			}
		case SET_CATEGORY:
			
			return {
				...state,
				activeCategory: action.payload,
			}
		default:
			return state
	}
}




