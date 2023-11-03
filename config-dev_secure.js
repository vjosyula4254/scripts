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
		url: 'https://backup-api-secured-m7mkmev5sq-uc.a.run.app',
		account: 'backupserviceaccount-dev_secure.json'
	},
	notifications: {
		smtphost: 'email-smtp.us-west-2.amazonaws.com',
		smtpport: 465,
		smtpuser: 'AKIA4TCVTEX6PBVHWHH2',
		smtpcred: 'BHcDPEcYNq9FNWNiAruS7xgYyF5xgU3IkbDzxU2omC6I',
		fromemail: 'anilm@sidgs.com',
		toemaillist: 'anilm@sidgs.com, nagendrab@sidgs.com'
	}
};