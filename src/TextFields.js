import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Select } from '@material-ui/core'
import { InputLabel } from '@material-ui/core'
import { Button } from '@material-ui/core'

import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	},
	dense: {
		marginTop: 19
	},
	menu: {
		width: 200
	},
	button: {
		marginTop: 40
	}
}))

export default function TextFields() {
	const classes = useStyles()
	const [age, setAge] = React.useState('')
	const handleChange = event => {
		setAge(event.target.value)
	}

	const [date, setDate] = React.useState('')
	const handleDate = event => {
		setDate(event.target.value)
	}

	const [name, setName] = React.useState('')
	const handleName = event => {
		setName(event.target.value)
	}

	return (
		<form className={classes.container} noValidate autoComplete='off'>
			<TextField
				id='username'
				label='Username'
				className={classes.textField}
				margin='normal'
				onChange={handleName}
			/>
			<TextField
				id='password'
				label='Password'
				type='password'
				className={classes.textField}
				margin='normal'
				onChange={handleName}
			/>
			<TextField
				id='confirmPassword'
				label='Confirm Password'
				type='password'
				className={classes.textField}
				margin='normal'
				onChange={handleName}
			/>
			<TextField
				id='name'
				label='Fullname'
				className={classes.textField}
				margin='normal'
				onChange={handleName}
			/>
			<TextField
				id='date'
				label='Date Of Birth'
				defaultValue=''
				className={classes.textField}
				type='date'
				margin='normal'
				InputLabelProps={{
					shrink: true
				}}
				onChange={handleDate}
			/>

			<InputLabel htmlFor='age-customized-native-simple'>
				License Type
			</InputLabel>
			<Select
				value={age}
				onChange={handleChange}
				inputProps={{
					name: 'age',
					id: 'age-simple'
				}}
			>
				<MenuItem value='full'>Full</MenuItem>
				<MenuItem value='prov'>Provisional</MenuItem>
			</Select>
			<Button variant='contained' color='secondary' className={classes.button}>
				Submit
			</Button>
		</form>
	)
}
