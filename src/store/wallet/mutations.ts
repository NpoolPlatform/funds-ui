import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { WalletState, state as emptyState } from './state'

export type Mutations<S = WalletState> = {
  [MutationTypes.SetAddress] (state: S, payload: string): void
  [MutationTypes.SetCID] (state: S, payload: string): void
  [MutationTypes.SetError] (state: S, payload: string): void
  [MutationTypes.SetLoading] (state: S, payload: boolean): void
  [MutationTypes.Reset] (state: S): void
}

export const mutations: MutationTree<WalletState> & Mutations = {
  [MutationTypes.SetAddress] (state: WalletState, payload: string) {
    state.Address = payload
  },
  [MutationTypes.SetCID] (state: WalletState, payload: string) {
    state.CID = payload
  },
  [MutationTypes.SetError] (state: WalletState, payload: string) {
    state.error = payload
  },
  [MutationTypes.SetLoading] (state: WalletState, payload: boolean) {
    state.loading = payload
  },
  [MutationTypes.Reset] (state: WalletState) {
    state = emptyState
  }
}
