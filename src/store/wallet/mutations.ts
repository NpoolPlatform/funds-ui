import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { WalletState, state as emptyState } from './state'

type WalletMutations<S = WalletState> = {
  [MutationTypes.SetAddress] (state: S, payload: string): void
  [MutationTypes.SetCID] (state: S, payload: string): void
  [MutationTypes.SetError] (state: S, payload: string): void
  [MutationTypes.SetLoading] (state: S, payload: boolean): void
  [MutationTypes.Reset] (state: S): void
}

const mutations: MutationTree<WalletState> & WalletMutations = {
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
    Object.assign(state, { ...emptyState })
  }
}

export { WalletMutations, mutations }
