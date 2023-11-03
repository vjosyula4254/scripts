const args = require('yargs').argv;

module.exports = {

	from: {
		url: 'https://api.enterprise.apigee.com',
		userid: args.apigee_user,
		passwd: args.apigee_pwd,
		tokenurl: 'https://ferguson.login.apigee.com/oauth/token'
	},
	to: {
		url: 'https://feidev-mgmt.sidgs.net/',
		userid: args.apigee_user,
		passwd: args.apigee_pwd,
		tokenurl: 'https://feidev-sso.sidgs.net/oauth/token'
	},
	db: {
		url: 'http://localhost:9090',
	}
};