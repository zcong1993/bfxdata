# bfxdata

> Currency Pairs data in https://www.bitfinex.com/stats

[![NPM version](https://img.shields.io/npm/v/bfxdata.svg?style=flat)](https://npmjs.com/package/bfxdata) [![NPM downloads](https://img.shields.io/npm/dm/bfxdata.svg?style=flat)](https://npmjs.com/package/bfxdata) [![CircleCI](https://circleci.com/gh/zcong1993/bfxdata/tree/master.svg?style=shield)](https://circleci.com/gh/zcong1993/bfxdata/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/zcong1993/donate)

## Install

```sh
$ yarn add bfxdata
# npm
$ npm i --save bfxdata
```

## Usage

```js
const bfxdata = require('bfxdata')

bfxdata()
  .then(console.log)

// [ { pair: 'BTC/USD',
//     last_trade: '8248.1',
//     '24_hour_ago': '7811.7',
//     '24_hour_change': '436.40  5.59%',
//     '7_days_ago': '6311.7',
//     '7_days_change': '1936.4  30.68%',
//     '30_days_ago': '6112.9',
//     '30_days_change': '2135.2  34.93%' },
//   { pair: 'LTC/USD',
//     last_trade: '72.108',
//     '24_hour_ago': '71.779',
//     '24_hour_change': '0.32900  0.46%',
//     '7_days_ago': '59.448',
//     '7_days_change': '12.660  21.30%',
//     '30_days_ago': '57.100',
//     '30_days_change': '15.008  26.28%' },
// ...]
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**bfxdata** © [zcong1993](https://github.com/zcong1993), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by zcong1993 with help from contributors ([list](https://github.com/zcong1993/bfxdata/contributors)).

> [github.com/zcong1993](https://github.com/zcong1993) · GitHub [@zcong1993](https://github.com/zcong1993)
