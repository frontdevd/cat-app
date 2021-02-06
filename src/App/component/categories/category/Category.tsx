import React from 'react'
import {useSelector} from 'react-redux'
import {ICategory} from '../../../interfaces'
import {Text} from '../../../styled'

type CategoryProps = {
	props: ICategory
	activeHandler: (id: number) => {}
}

const Category: React.FC<CategoryProps> = ({props, activeHandler}) => {
	const activeCategory: string = useSelector((state: any) => state.categories.activeCategory)
	const active: string = props.id === activeCategory ? 'btn-pink' : ''
	
	return (
		<Text className={active} onClick={id => activeHandler(props.id)}>
			{props.name}
		</Text>
	)
}

export default Category
