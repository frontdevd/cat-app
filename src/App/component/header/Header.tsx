import React from 'react'
import {NavLink} from 'react-router-dom'
import {HeaderBlock, HeaderWrapper} from '../../styled'

const Header: React.FC = () => {
	return (
		<HeaderBlock>
			<HeaderWrapper>
				<nav className='box'>
					<NavLink to='/' className='logo'>Cat App</NavLink>
				</nav>
			</HeaderWrapper>
		</HeaderBlock>
	)
}

export default Header
