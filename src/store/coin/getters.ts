import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { CoinState } from './state'

export type Getters = {
  getCoinName (state: CoinState): string
  getCoinLoading (state: CoinState): boolean
  getCoinError (state: CoinState): string
}

export const getters: GetterTree<CoinState, StateInterface> & Getters = {
  getCoinName: (state: CoinState) => state.Name,
  getCoinLoading: (state: CoinState) => state.loading,
  getCoinError: (state: CoinState) => state.error
}
