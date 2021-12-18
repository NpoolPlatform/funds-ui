export interface CoinState {
  Name: string

  error: string
  loading: boolean
}

export const state: CoinState = {
  Name: '',

  error: '',
  loading: false
}
