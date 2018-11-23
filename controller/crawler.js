const scrapePage = require('./scrapePage')
const url = 'https://www.hotelurbano.com/promocoes'

module.exports = async (req, res) => {
	const json = await scrapePage(url)
	res.json(json)
}