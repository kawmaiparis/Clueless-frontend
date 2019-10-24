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
			type: ''
		}
	}

	handleUsername = e => {
		this.setState({
			username: e.target.value
		})
	}
	handlePassword = e => {
		this.setState({
			password: e.target.value
		})
	}
	handleConfirmPassword = e => {
		this.setState({
			confirmPassword: e.target.value
		})
	}
	handleName = e => {
		this.setState({
			name: e.target.value
		})
	}
	handleDate = e => {
		this.setState({
			dob: e.target.value
		})
	}
	handleType = e => {
		this.setState({
			type: e.target.value
		})
	}
	handleSubmit = e => {
		const { username, password, name, dob, type } = this.state
		const creds = {
			username,
			password,
			name,
			dob,
			type
		}
		console.log(creds)
		axios({
			method: 'POST',
			url: 'http://localhost:8080',
			data: creds
		})
	}

	render() {
		return (
			<div className='App'>
				<h1>Clueless.</h1>
				<form className='myForm' noValidate autoComplete='off'>
					<TextField
						id='username'
						label='Username'
						margin='normal'
						value={this.state.username}
						onChange={this.handleUsername}
					/>
					<TextField
						id='password'
						label='Password'
						type='password'
						margin='normal'
						onChange={this.handlePassword}
					/>
					<TextField
						id='confirmPassword'
						label='Confirm Password'
						type='password'
						margin='normal'
						error={this.state.password != this.state.confirmPassword}
						onChange={this.handleConfirmPassword}
					/>
					<TextField
						id='name'
						label='Fullname'
						margin='normal'
						onChange={this.handleName}
					/>
					<TextField
						id='date'
						label='Date Of Birth'
						defaultValue=''
						type='date'
						margin='normal'
						InputLabelProps={{
							shrink: true
						}}
						onChange={this.handleDate}
					/>
					<TextField
						id='type'
						select
						label='License Type'
						value={this.state.type}
						onChange={this.handleType}
						margin='normal'
					>
						<MenuItem value='full'>Full</MenuItem>
						<MenuItem value='prov'>Provisional</MenuItem>
					</TextField>
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
								this.state.password == this.state.confirmPassword
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
