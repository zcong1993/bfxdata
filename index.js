const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://www.bitfinex.com/stats'

function run() {
  return axios.get(url)
    .then(data => parse(data.data))
    .then(t => normalize(t))
}

function parse(html) {
  const $ = cheerio.load(html, {
    ignoreWhitespace: true
  })

  const tds = $($('table')[0]).html()

  const table = cheerio.load(tds, {
    xmlMode: true,
    ignoreWhitespace: true
  })

  const t = []

  table('tr')
    .each((_, el) => {
      const arr = []
      $(el).children('td').each((_, e) => {
        arr.push($(e).text().replace(/\n/g, '').trim())
      })
      t.push(arr)
    })

  return t
}

// [ 'BTC/USD',
// '8225.2',
// '',
// '7773.8',
// '451.40  5.81%',
// '',
// '6509.0',
// '1716.2  26.37%',
// '',
// '6142.8',
// '2082.4  33.90%' ]
function normalize(data) {
  const arr = [...data]
    .filter(a => a.length === 11)
    .map(a => {
      const obj = {
        pair: a[0],
        last_trade: a[1], // eslint-disable-line camelcase
        '24_hour_ago': a[3],
        '24_hour_change': a[4],
        '7_days_ago': a[6],
        '7_days_change': a[7],
        '30_days_ago': a[9],
        '30_days_change': a[10]
      }
      return obj
    })
  return arr
}

module.exports = run
