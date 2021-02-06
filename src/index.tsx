import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './App/redux/store'

import App from './App/App'
import {GlobalStyle} from './App/styled'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle/>
			<App/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
