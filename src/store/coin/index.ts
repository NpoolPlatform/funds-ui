import { CoinState, state } from './state'
import { CoinGetters, getters } from './getters'
import { CoinMutations, mutations } from './mutations'
import { Module } from 'vuex'
import { StateInterface } from '../index'

const coin: Module<CoinState, StateInterface> = {
  // namespaced: true,
  getters,
  mutations,
  state
}

export {
  coin,
  CoinState, state,
  CoinGetters, getters,
  CoinMutations, mutations
}
