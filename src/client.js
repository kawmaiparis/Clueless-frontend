// const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser')

// const app = express()
// const port = 8080

// app.use(bodyParser.json())
// app.use(cors())

// app.listen(() => {
// 	console.log(`listen on port ${port}`)
// })

// app.post('/', (req, res) => {
// 	console.log(req.body)
// })

var ApiDocumentation = require('api_documentation')

var apiInstance = new ApiDocumentation.VerifierControllerApi()

var opts = {
	credOffer: 'credOffer_example', // String |
	credRequestCredentialRequestJson: 'credRequestCredentialRequestJson_example', // String |
	credRequestCredentialRequestMetadataJson:
		'credRequestCredentialRequestMetadataJson_example', // String |
	credentialsCredDefId: 'credentialsCredDefId_example', // String |
	credentialsCredDefJson: 'credentialsCredDefJson_example', // String |
	masterSecretId: 'masterSecretId_example', // String |
	name: 'name_example', // String | name
	proofJson: 'proofJson_example', // String | proofJson
	proofRequestJson: 'proofRequestJson_example' // String | proofRequestJson
}

var callback = function(error, data, response) {
	if (error) {
		console.error(error)
	} else {
		console.log('API called successfully. Returned data: ' + data)
	}
}
apiInstance.verifyProofUsingGET(opts, callback)
