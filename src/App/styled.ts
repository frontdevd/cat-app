import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
body {
	font-family: 'Open Sans', sans-serif;
	background-color: #f8f9fa;
	margin: 0;
	padding: 0;
}
img {
	max-width: 100%;
	width: 100%;
}
a {
	text-decoration: none;
	color: #000;
}
p {
	margin: 0;
	text-transform: capitalize;
}
svg {
	width: 100%;
	height: 100%;
}
.btn-pink {
	padding: 6px 16px;
	font-size: 0.875rem;
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
	box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
	border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	font-weight: 500;
	line-height: 1.75;
	border-radius: 4px;
	letter-spacing: 0.02857em;
	color: rgba(0, 0, 0, 0.87);
	box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),
	0px 2px 2px 0px rgba(0,0,0,0.14),
	0px 1px 5px 0px rgba(0,0,0,0.12);
	color: #fff;
	background-color: rgb(220, 0, 78);
	text-transform: capitalize;
	border: 0;
	cursor: pointer;
	outline: none;
}
a.active {
	font-weight: bold;
	color: rgb(220, 0, 78);
}
.logo{
	color: rgb(220, 0, 78);
	font-size: 24px;
}
`
export const Text = styled.p`
	font-family: 'Open Sans', sans-serif;
	padding: 12px;
	cursor: pointer;
	@media (max-width: 991px) {
		display: inline;
		padding: 6px;
	}
`
export const CardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	min-height: 430px;
`
export const Card = styled.div`
	box-shadow: 0 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
	width: 19%;
	height: 200px;
	background: white;
	box-sizing: border-box;
	margin: 0 1% 1% 0;
		@media (min-width: 1920px) {
			width: 32%;
			height: 320px;
	}
	@media (max-width: 1300px) {
		width: 24%;
		height: 160px;
	}
	@media (max-width: 580px) {
		width: 31%;
		height: 100px;
		margin: 1.1%;
	}
`
export const Image = styled.img`
	width: 100%;
	object-fit: cover;
	height: 100%;
`
export const Title = styled.p`
	color: rgb(220, 0, 78);
	font-weight: bold;
	padding: 20px;
`
export const HeaderBlock = styled.header`
	background-color: #ffffff;
	padding: 20px;
	margin-bottom: 10px;
`
export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`
export const NotFoundWrapper = styled.div`
	font-family: 'Open Sans', sans-serif;
	display: grid;
	justify-content: center;
	align-content: center;
	height: 100vh;
	text-align: center;
`
export const LinkToHome = styled.p`
	font-family: 'Open Sans', sans-serif;
`
export const Content = styled.div`
	width: 98%;
	margin: 0 auto;
	box-sizing: border-box;
	@media (max-width: 991px) {
		width: 100%;
		margin: 0 auto;
		padding: 0 10px;
	}
`
export const Wrapper = styled.div`
	display: flex;
	box-sizing: border-box;
		@media (max-width: 991px) {
			flex-direction: column;
		}
`
export const Aside = styled.aside`
	width: 230px;
	background: #fff;
	padding: 20px;
	box-sizing: border-box;
	margin-right: 44px;
		@media (max-width: 991px) {
			width: 100%;
			margin: 0;
			padding: 4px;
			display: flex;
			flex-wrap: wrap;
			min-height: 80px;
	}
`
export const Main = styled.main`
	display: flex;
	box-sizing: border-box;
	width: calc(100% - 300px);
	@media (max-width: 991px) {
		width: 100%;
	}
`
export const LoadMoreWrapper = styled.div`
	text-align: center;
	padding: 10px 0;
`
