import React from 'react'
import {Card, Image} from '../../../styled'

type CatProps = {
	props: {
		breeds: [],
		categories: [{ id: string | number, name: string }]
		id: string
		url: string
		width: number
		height: number
	}
}

const Cat: React.FC<CatProps> = ({props}) => {
	return (
		<Card>
			<Image src={props.url} alt='Cats'/>
		</Card>
	)
}

export default Cat
