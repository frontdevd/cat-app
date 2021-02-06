import axios from 'axios'
import {Dispatch} from 'react'
import {baseUrl} from '../../../../config'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const SET_CATEGORY = 'SET_CATEGORY'

export function getCategoriesApi() {
	return async function (dispatch: Dispatch<any>) {
		try {
			const response = await axios.get(`${baseUrl}/v1/categories`)
			dispatch(getCategories(response.data))
		} catch (e) {
			console.log('Get categories api', e)
		}
	}
}

export const getCategories = (categories: any) => ({type: GET_CATEGORIES, payload: categories})
export const setCategory = (id: number) => ({type: SET_CATEGORY, payload: id})
