import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { WalletState } from './state'

export type Mutations<S = WalletState> = {
  [MutationTypes.SetAddress] (state: S, payload: string): void
  [MutationTypes.SetError] (state: S, payload: string): void
  [MutationTypes.SetLoading] (state: S, payload: boolean): void
}

export const mutations: MutationTree<WalletState> & Mutations = {
  [MutationTypes.SetAddress] (state: WalletState, payload: string) {
    state.Address = payload
  },
  [MutationTypes.SetError] (state: WalletState, payload: string) {
    state.error = payload
  },
  [MutationTypes.SetLoading] (state: WalletState, payload: boolean) {
    state.loading = payload
  }
}
