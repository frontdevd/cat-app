import React from 'react'
import {Cat} from '../index'
import {CardWrapper} from '../../styled'
import {ICat} from '../../interfaces'

type CatsProps = {
	items: ICat[]
}

const Cats: React.FC<CatsProps> = ({items}) => {
	return (
		<CardWrapper>
			{items.map((item: any) => <Cat key={item.id} props={item}/>)}
		</CardWrapper>
	)
}

export default Cats
