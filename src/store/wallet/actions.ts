import { ActionTree, ActionContext } from 'vuex'
import { WalletState } from './state'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'
import { WalletMutations } from './mutations'
import { StateInterface } from '../index'
import { post } from 'src/boot/axios'
import {
  CreateTransactionRequest,
  CreateTransactionResponse,
  CreateWalletRequest,
  CreateWalletResponse,
  GetTransactionRequest,
  GetTransactionResponse
} from './types'

enum apipath {
  GetBalance = '/sphinx-proxy/v1/get/balance',
  CreateWallet = '/sphinx-proxy/v1/create/wallet',
  CreateTransaction = '/sphinx-proxy/v1/create/transaction',
  GetTransaction = '/sphinx-proxy/v1/get/transaction'
}

type AugmentedActionContext = {
  commit<k extends keyof WalletMutations> (
    key: k,
    payload: Parameters<WalletMutations[k]>[1]
  ): ReturnType<WalletMutations[k]>
} & Omit<ActionContext<WalletState, StateInterface>, 'commit'>

interface WalletActions {
  [ActionTypes.CreateWallet] (
    { commit }: AugmentedActionContext,
    payload: CreateWalletRequest
  ): void,
  [ActionTypes.CreateTransaction] (
    { commit }: AugmentedActionContext,
    payload: CreateTransactionRequest
  ): void,
  [ActionTypes.GetTransaction] (
    { commit }: AugmentedActionContext,
    payload: GetTransactionRequest
  ): void,
}

const actions: ActionTree<WalletState, StateInterface> & WalletActions = {
  [ActionTypes.CreateWallet] ({ commit }, payload: CreateWalletRequest) {
    commit(MutationTypes.SetLoading, true)
    post<CreateWalletRequest, CreateWalletResponse>(apipath.CreateWallet, payload)
      .then((response: CreateWalletResponse) => {
        commit(MutationTypes.SetAddress, response.Info.Address)
        commit(MutationTypes.SetError, '')
        commit(MutationTypes.SetLoading, false)
      })
      .catch(err => {
        commit(MutationTypes.SetAddress, '')
        commit(MutationTypes.SetError, err)
        commit(MutationTypes.SetLoading, false)
      })
  },
  [ActionTypes.CreateTransaction] ({ commit }, payload: CreateTransactionRequest) {
    commit(MutationTypes.SetLoading, true)
    post<CreateTransactionRequest, CreateTransactionResponse>(apipath.CreateTransaction, payload)
      .then(() => {
        commit(MutationTypes.SetError, '')
        commit(MutationTypes.SetLoading, false)
      })
      .catch(err => {
        commit(MutationTypes.SetError, err)
        commit(MutationTypes.SetLoading, false)
      })
  },
  [ActionTypes.GetTransaction] ({ commit }, payload: GetTransactionRequest) {
    commit(MutationTypes.SetLoading, true)
    const cancel = setInterval(() => {
      post<GetTransactionRequest, GetTransactionResponse>(apipath.GetTransaction, payload)
        .then((response: GetTransactionResponse) => {
          commit(MutationTypes.SetCID, response.Info.CID)
          if (response.Info.ExitCode !== '-1') {
            commit(MutationTypes.SetCID, response.Info.CID)
            commit(MutationTypes.SetLoading, false)
            clearInterval(cancel)
          }
        })
        .catch(err => {
          commit(MutationTypes.SetError, err)
          commit(MutationTypes.SetLoading, false)
          clearInterval(cancel)
        })
    }, 1000)
  }
}

export { WalletActions, actions }
