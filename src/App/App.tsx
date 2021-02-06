import {Layout, Header} from './component'
import {Switch, Route, Redirect, BrowserRouter, HashRouter} from 'react-router-dom'
import React, {Suspense, lazy} from 'react'

const NotFound = lazy(() => import('./component/layout/NotFountPage'))

const App: React.FC = () => {
	return (
		// HashRouter for github live to make pages work correctly
		<HashRouter basename='/'>
			<Switch>
				<Route exact path='/'>
					<Header/>
					<Layout/>
				</Route>
				<Suspense fallback={<div>Loading...</div>}>
					<Route exact path='/page-not-found'>
						<NotFound/>
					</Route>
					<Redirect to='/page-not-found'/>
				</Suspense>
			</Switch>
		</HashRouter>
	)
}

export default App
