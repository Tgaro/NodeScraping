module.exports = app => {

	crawler = require('../Controller/crawler')
	
	app.get(
			'/scrape',
			crawler
		)

}