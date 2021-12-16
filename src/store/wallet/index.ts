import { WalletState, state } from './state'
import { Getters, getters } from './getters'
import { Mutations, mutations } from './mutations'
import { Actions, actions } from './actions'
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
  Getters, getters,
  Mutations, mutations,
  Actions, actions
}
