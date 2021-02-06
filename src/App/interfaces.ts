// Cats interfaces
export interface ICats {
	items: ICat[],
	loader?: boolean,
	currentPage: number
}

export interface ICat {
	breeds: []
	categories: [{ id: number | string, name: string }]
	id: number | string
	url: any
	width: number
	height: number
}

// Categories interfaces
export interface ICategories {
	items: [],
	loader: boolean,
	activeCategory: number
}

export interface ICategory {
	id: any
	name: string
}

// Action interfaces
export interface IAction {
	type: string
	payload?: any
}
