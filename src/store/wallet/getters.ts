import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { WalletState } from './state'

export type Getters = {
  getWalletAddress (state: WalletState): string
  getWalletLoading (state: WalletState): boolean
  getWalletError (state: WalletState): string
}

export const getters: GetterTree<WalletState, StateInterface> & Getters = {
  getWalletAddress: (state: WalletState) => state.Address,
  getWalletLoading: (state: WalletState) => state.loading,
  getWalletError: (state: WalletState) => state.error
}
