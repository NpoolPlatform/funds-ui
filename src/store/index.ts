import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
  CommitOptions,
  DispatchOptions
} from 'vuex'

import {
  wallet,
  WalletState,
  WalletMutations,
  WalletActions,
  WalletGetters
} from './wallet'

import {
  coin,
  CoinState,
  CoinMutations,
  CoinGetters
} from './coin'

type Actions = WalletActions
type Mutations = WalletMutations & CoinMutations
type Getters = WalletGetters & CoinGetters

export interface StateInterface {
  wallet: WalletState
  coin: CoinState
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

export type Store = Omit<
  VuexStore<StateInterface>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]> (
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions> (
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      wallet,
      coin
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  })

  return Store
})

export function useStore () {
  return vuexUseStore(storeKey) as Store
}
