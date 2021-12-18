import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { CoinState, state as emptyState } from './state'

type CoinMutations<S = CoinState> = {
  [MutationTypes.SetName] (state: S, payload: string): void
  [MutationTypes.SetError] (state: S, payload: string): void
  [MutationTypes.SetLoading] (state: S, payload: boolean): void
  [MutationTypes.Reset] (state: S): void
}

const mutations: MutationTree<CoinState> & CoinMutations = {
  [MutationTypes.SetName] (state: CoinState, payload: string) {
    state.Name = payload
  },
  [MutationTypes.SetError] (state: CoinState, payload: string) {
    state.error = payload
  },
  [MutationTypes.SetLoading] (state: CoinState, payload: boolean) {
    state.loading = payload
  },
  [MutationTypes.Reset] (state: CoinState) {
    state.Name = emptyState.Name
    state.error = emptyState.error
    state.loading = emptyState.loading
  }
}

export { CoinMutations, mutations }
