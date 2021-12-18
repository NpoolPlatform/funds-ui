import { CoinState, state } from './state'
import { Getters, getters } from './getters'
import { Mutations, mutations } from './mutations'
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
  Getters, getters,
  Mutations, mutations
}
