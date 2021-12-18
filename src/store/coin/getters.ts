import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { CoinState } from './state'

type CoinGetters = {
  getCoinName (state: CoinState): string
  getCoinLoading (state: CoinState): boolean
  getCoinError (state: CoinState): string
}

const getters: GetterTree<CoinState, StateInterface> & CoinGetters = {
  getCoinName: (state: CoinState) => state.Name,
  getCoinLoading: (state: CoinState) => state.loading,
  getCoinError: (state: CoinState) => state.error
}

export { CoinGetters, getters }
