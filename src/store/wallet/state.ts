export interface WalletState {
  Name: string
  From: string
  To: string
  Amount: number

  Balance: number
  BalanceStr: string

  Address: string

  CID: string
  error: string
  loading: boolean
}

export const state: WalletState = {
  Name: '',
  From: '',
  To: '',
  Amount: 0,

  Balance: 0,
  BalanceStr: '',

  Address: '',

  CID: '',
  error: '',
  loading: false
}
