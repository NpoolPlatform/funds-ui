import { WalletState, state } from './state'
import { WalletGetters, getters } from './getters'
import { WalletMutations, mutations } from './mutations'
import { WalletActions, actions } from './actions'
import { Module } from 'vuex'
import { StateInterface } from '../index'

const wallet: Module<WalletState, StateInterface> = {
  // namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export {
  wallet,
  WalletState, state,
  WalletGetters, getters,
  WalletMutations, mutations,
  WalletActions, actions
}
