import axios from 'axios'
import {Dispatch} from 'react'
import {baseUrl} from '../../../../config'

export const GET_CATS = 'GET_CATS'
export const SET_PAGE = 'SET_PAGE'

export function getCatsApi(catId: number = 1, page: number = 1) {
	return async function (dispatch: Dispatch<any>) {
		try {
			const response =
				await axios.get(`${baseUrl}/v1/images/search?limit=10&category_ids=${catId}&page=${page}`)
				dispatch(getCats(response.data))
		} catch (e) {
			console.log('Load more cats api', e)
		}
	}
}

export function loadMoreApi(catId: number, page: number) {
	return async function (dispatch: Dispatch<any>) {
		try {
			const response =
				await axios.get(`${baseUrl}/v1/images/search?limit=10&category_ids=${catId}&page=${page}`)
				dispatch(setPage({data: response.data, page}))
		} catch (e) {
			console.log('Load more cats api', e)
		}
	}
}

export const getCats = (cats: any) => ({type: GET_CATS, payload: cats})
export const setPage = (data: any) => ({type: SET_PAGE, payload: data})
