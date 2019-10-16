import React from 'react'
import './App.css'
import TextFields from './TextFields.js'

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<h1>Clueless.</h1>
				<TextFields />
			</div>
		)
	}
}

export default App
