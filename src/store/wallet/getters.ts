import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { WalletState } from './state'

export type Getters = {
  getAddress (state: WalletState): string
}

export const getters: GetterTree<WalletState, StateInterface> & Getters = {
  getAddress: (state: WalletState) => state.Address
}
