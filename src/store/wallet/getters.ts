import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { WalletState } from './state'

type WalletGetters = {
  getWalletAddress (state: WalletState): string
  getWalletLoading (state: WalletState): boolean
  getWalletError (state: WalletState): string
}

const getters: GetterTree<WalletState, StateInterface> & WalletGetters = {
  getWalletAddress: (state: WalletState): string => state.Address,
  getWalletLoading: (state: WalletState): boolean => state.loading,
  getWalletError: (state: WalletState): string => state.error
}

export { WalletGetters, getters }
