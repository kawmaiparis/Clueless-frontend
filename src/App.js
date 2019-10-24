import React from 'react'
import './App.css'
import TextFields from './TextFields.js'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Select } from '@material-ui/core'
import { InputLabel } from '@material-ui/core'
import { Button } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'

import axios from 'axios'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			name: '',
			dob: 0,
			type: '',
			points: 0
		}
	}

	handleChange = e => {
		const { name, value } = e.target
		this.setState({
			[name]: value
		})
	}

	handleSubmit = e => {
		const { username, password, name, dob, type, points } = this.state
		const creds = {
			username,
			password,
			name,
			dob,
			type,
			points
		}
		console.log(creds)
		axios({
			method: 'POST',
			url: 'http://localhost:8081',
			data: creds
		}).then(() => console.log('Credentials submitted.'))
	}

	render() {
		return (
			<div className='App'>
				<h1>Clueless.</h1>
				<h2>Issuer</h2>
				<form className='myForm' noValidate autoComplete='off'>
					<TextField
						name='username'
						label='Username'
						margin='normal'
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<TextField
						name='password'
						label='Password'
						type='password'
						margin='normal'
						onChange={this.handleChange}
					/>
					<TextField
						name='confirmPassword'
						label='Confirm Password'
						type='password'
						margin='normal'
						error={this.state.password != this.state.confirmPassword}
						onChange={this.handleChange}
					/>
					<TextField
						name='name'
						label='Fullname'
						margin='normal'
						onChange={this.handleChange}
					/>
					<TextField
						name='dob'
						label='Date Of Birth'
						defaultValue=''
						type='date'
						margin='normal'
						InputLabelProps={{
							shrink: true
						}}
						onChange={this.handleChange}
					/>
					<TextField
						name='type'
						select
						label='License Type'
						value={this.state.type}
						onChange={this.handleChange}
						margin='normal'
					>
						<MenuItem value='full'>Full</MenuItem>
						<MenuItem value='prov'>Provisional</MenuItem>
					</TextField>
					<TextField
						name='points'
						type='number'
						label='Penalty points'
						min='0'
						value={this.state.points}
						onChange={this.handleChange}
						margin='normal'
					></TextField>
					<br />
					<Button
						variant='contained'
						color='secondary'
						disabled={
							!(
								this.state.name &&
								this.state.username &&
								this.state.password &&
								this.state.dob &&
								this.state.password === this.state.confirmPassword &&
								this.state.type &&
								this.state.points >= 0 &&
								this.state.points <= 13
							)
						}
						onClick={this.handleSubmit}
					>
						Submit
					</Button>
				</form>
			</div>
		)
	}
}

export default App
