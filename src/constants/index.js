export const FACTORY_ADDRESS = '0x58A08bc28f3E8dab8Fb2773D8f243bC740398b09' // ADDS PARTYSWAP FACTORY

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
  'https://raw.githubusercontent.com/PartySwapDEX/token-lists/main/ab.tokenlist.json',
  'https://raw.githubusercontent.com/PartySwapDEX/token-lists/main/aeb.tokenlist.json',
  'https://raw.githubusercontent.com/PartySwapDEX/token-lists/main/top15.tokenlist.json'
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  '0xa47a05ed74f80fa31621612887d26df40bcf0ca9',
  '0x97b99b4009041e948337ebca7e6ae52f9f6e633c',
]

// pair blacklist
export const PAIR_BLACKLIST = []

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']
