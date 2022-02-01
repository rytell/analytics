import dayjs from 'dayjs'

export const FACTORY_ADDRESS = '0xe5e970fe3a90f314977a9fd41e349486a9e8c4fe' // ADDS PARTYSWAP FACTORY

export const WAVAX_ADDRESS = '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
//
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://raw.githubusercontent.com/pangolindex/tokenlists/main/ab.tokenlist.json',
  'https://raw.githubusercontent.com/pangolindex/tokenlists/main/aeb.tokenlist.json',
  'https://raw.githubusercontent.com/pangolindex/tokenlists/main/top15.tokenlist.json',
  'https://raw.githubusercontent.com/rytell/tokenlists/main/rytell.tokenlist.json',
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  '0xa47a05ed74f80fa31621612887d26df40bcf0ca9',
  '0x97b99b4009041e948337ebca7e6ae52f9f6e633c',
  '0x3ea3e5c6957581f3e70b2c33721d4e6844f60619',
  '0x81d8B7e80b5823Ebb93D5019dde5096E03292F12',
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0x93e585458e04c04327451a1b7266157bc2dfec0e',
  '0x3284797adaec7b9a9632e7c618812eff8a96e10b',
  '0x0b2263c901ccee687dfebc6fa31dba9632a9c6e9',
]

export const LAUNCH_DATE = dayjs('2022-01-30').unix() - 1

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']
