const pupt = require('puppeteer')

const scrape = async url => {

	const browser = await pupt.launch({headless: false})
	const page = await browser.newPage()

	await page.goto(url, {
                waitUntil: 'networkidle2',
                timeout: 3000000
            })

	const result = await page.evaluate(() => {

		let data = []
		
		const destination = [].slice.call(document.querySelectorAll('.offer-card__title'))
		const price = [].slice.call(document.querySelectorAll('.atomic-price.offer-card__price-number'))

		destination.forEach((item, index) => {
			data.push({
				destination: item.innerText,
				price: price[index].innerText
			})
		})

		return data

	})

	console.log('Query results', result)

	browser.close()

	return result
}

module.exports = url => {
	return scrape(url).then(result => result)
}
