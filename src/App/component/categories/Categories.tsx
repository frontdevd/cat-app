import React from 'react'
import Category from './category/Category'
import {ICategory} from '../../interfaces'

type CategoriesProps = {
	items: [ICategory]
	categoryHander: any
}

const Categories: React.FC<CategoriesProps> = ({categoryHander, items}) => {
	return (
		<>
			{items.map((item: any, index: number) => <Category
				key={index}
				activeHandler={categoryHander}
				props={item}/>)}
		</>
	)
}

export default Categories
