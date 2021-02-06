import React from 'react'
import ContentLoader from 'react-content-loader'
import {Card, CardWrapper} from '../../styled'

const Skeleton = () => {
	return (
		<Card>
			<ContentLoader
				speed={2}
				// width={275}
				// height={275}
				// viewBox='0 0 275 275'
				backgroundColor='#f3f3f3'
				foregroundColor='#ecebeb'
			>
				<rect x='0' y='0' rx='0' ry='0' width='100%' height='100%'/>
			</ContentLoader>
		</Card>
	)
}

const CardSkeleton: React.FC = () => {
	const mapping = () => Array(10).fill('').map((_, index: number) => <Skeleton key={index}/>)
	return (
		<CardWrapper>
			{mapping()}
		</CardWrapper>
	)
}

export default CardSkeleton
