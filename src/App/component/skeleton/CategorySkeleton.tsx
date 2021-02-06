import React from 'react'
import ContentLoader from 'react-content-loader'
import {CardWrapper} from '../../styled'

const Skeleton = () => {
	return (
		<ContentLoader
			speed={2}
			width={190}
			height={36}
			viewBox='0 0 190 36'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
		>
			<rect x='4' y='5' rx='0' ry='0' width='190' height='36'/>
		</ContentLoader>
	)
}

const CategorySkeleton: React.FC = () => {
	const mapping = () => Array(10).fill('').map((_, index: number) => <Skeleton key={index}/>)
	return (
		<CardWrapper>
			{mapping()}
		</CardWrapper>
	)
}

export default CategorySkeleton
