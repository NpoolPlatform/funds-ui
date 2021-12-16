import { ActionTree, ActionContext } from 'vuex'
import { WalletState } from './state'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'
import { Mutations } from './mutations'
import { StateInterface } from '../index'
import { post } from 'src/boot/axios'
import { CreateWalletRequest, CreateWalletResponse } from './types'

enum apipath {
  GetBalance = '/sphinx-proxy/v1/get/balance',
  CreateWallet = '/sphinx-proxy/v1/create/wallet',
  CreateTransaction = '/sphinx-proxy/v1/create/transaction',
  GetTransaction = '/sphinx-proxy/v1/get/transaction'
}

type AugmentedActionContext = {
  commit<k extends keyof Mutations> (
    key: k,
    payload: Parameters<Mutations[k]>[1]
  ): ReturnType<Mutations[k]>
} & Omit<ActionContext<WalletState, StateInterface>, 'commit'>

export interface Actions {
  [ActionTypes.CreateWallet] (
    { commit }: AugmentedActionContext,
    payload: CreateWalletRequest
  ): void
}

export const actions: ActionTree<WalletState, StateInterface> & Actions = {
  [ActionTypes.CreateWallet] ({ commit }, payload: CreateWalletRequest) {
    commit(MutationTypes.SetLoading, true)
    post<CreateWalletRequest, CreateWalletResponse>(apipath.CreateWallet, payload)
      .then((response: CreateWalletResponse) => {
        commit(MutationTypes.SetAddress, response.Info.Address)
        commit(MutationTypes.SetLoading, false)
      })
      .catch(err => {
        commit(MutationTypes.SetError, err)
        commit(MutationTypes.SetLoading, false)
      })
  }
}
