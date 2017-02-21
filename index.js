const { parse } = require('url')
const { send } = require('micro')
const scraper = require('open-graph-scraper')
const cache = require('memory-cache')

const TWENTY_FOUR_HOURS = 86400000;

module.exports = async (req, res) => {
  const { query: { url } } = parse(req.url, true)
  if (!url) return send(res, 401, { message: 'Please supply an URL to be scraped in the url query parameter.' })

  const cachedResult = cache.get(url)
  if (cachedResult) return send(res, 200, cachedResult)

  scraper({ url, allMedia: true }, function (err, results) {
    if (err || !results.success) return send(res, 500, { message: 'Scraping the open graph data from the URL failed.', suggestion: 'Make sure your URL is correct and the webpage has open graph data, meta tags or twitter card data.' })

    send(res, 400, results)
    // Cache results for 24 hours
    cache.put(url, results, TWENTY_FOUR_HOURS)
  })
}
