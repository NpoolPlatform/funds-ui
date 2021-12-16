export interface WalletState {
  Name: string
  From: string
  To: string
  Amount: number

  Balance: number
  BalanceStr: string

  Address: string

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

  error: '',
  loading: false
}
