'use strict';

module.exports = {
	db: 'mongodb://localhost/meanscoket-dev',
	app: {
		title: 'MEANScoket - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '618789921588760',
		clientSecret: process.env.FACEBOOK_SECRET || 'c13528108f7bf861ee5ba699cf41db70',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'zZy01TIgsSvC45S3dUHomIWvS',
		clientSecret: process.env.TWITTER_SECRET || 'NI6ddaLr5m43VkL6RyIw3jnBXyUXyAWn9yt3T36rhDS85MeaAT',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '229808432603-kha9ocvil34tiqkdrr4n0ft55nqc1gi3.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'AYkNnj0O07j2KkkuaBWnQSh3',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
