import React from 'react'
import {NavLink} from 'react-router-dom'
import {LinkToHome, NotFoundWrapper, Text} from '../../styled'

const NotFountPage: React.FC<any> = () => {
	return (
		<NotFoundWrapper>
			<Text>Page not found?</Text>
			<LinkToHome>Go to <NavLink to='/'> home</NavLink></LinkToHome>
		</NotFoundWrapper>
	)
}

export default NotFountPage
