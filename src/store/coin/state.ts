interface CoinState {
  Name: string

  error: string
  loading: boolean
}

const state: CoinState = {
  Name: '',

  error: '',
  loading: false
}

export { CoinState, state }
