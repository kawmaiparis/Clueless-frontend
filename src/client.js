const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const ApiDocumentation = require('api_documentation')
const apiInstance = new ApiDocumentation.IssuerControllerApi()

const app = express()
const port = 8081

app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => {
	console.log(`listen on port ${port}`)
})

app.post('/', (req, res) => {
	// console.log(req.body)
	submitCredentials(req.body)
})

const submitCredentials = params => {
	console.log(params)
	// const opts = {
	// 	dateOfBirth: new Date(params.dob), // Date | dateOfBirth *
	// 	issuerDid: 'issuerDid_exampl',
	// 	licenceLevel: params.points, // Number | licenceLevel *
	// 	name: params.name, // String | name *
	// 	proverDid: 'proverDid_exampl', // String | proverDid
	// 	proverWalletId: 'proverWalletId_exampl', // String | proverWalletId
	// 	proverWalletKey: 'proverWalletKey_exampl' // String | proverWalletKey
	// }
	// console.log(date)
	var opts = {
		dateOfBirth: '1988-05-05', // Date | dateOfBirth
		issuerDid: 'NcYxiaskpYi6ov5FcYDi1e', // String | issuerDid
		licenceLevel: 56, // Number | licenceLevel
		name: 'ksljad', // String | name
		proverDid: 'NcYxiDXkpYi3ov5FcYDi1e', // String | proverDid
		proverWalletId: 'provtId_example', // String | proverWalletId
		proverWalletKey: 'plletKey_example' // String | proverWalletKey
	}

	const callback = function(error, data, response) {
		if (error) {
			console.error(error)
		} else {
			console.log('API called successfully.')
			console.log(response.body)
		}
	}
	apiInstance.issuerCreateCredentialsUsingPUT(opts, callback)
}
