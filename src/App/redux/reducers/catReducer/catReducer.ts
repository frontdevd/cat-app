import {IAction, ICats} from '../../../interfaces'
import {GET_CATS, SET_PAGE} from '../../actions/cats/cats'

const initializeState: ICats = {
	items: [],
	loader: true,
	currentPage: 2
}

export default function catReducer(state: ICats = initializeState, action: IAction) {
	switch (action.type) {
		case GET_CATS:
			return {
				...state,
				items: action.payload,
				loader: false,
			}
		case SET_PAGE:
			return {
				...state,
				items: [...state.items, ...action.payload.data],
				currentPage: state.currentPage + 1,
			}
		default:
			return state
	}
}


