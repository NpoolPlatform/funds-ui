export interface WalletInfo {
  name: string
  from: string
  to: string
  balance: string
  balanceStr: string
}

function state (): WalletInfo {
  return {} as WalletInfo
}

export default state
