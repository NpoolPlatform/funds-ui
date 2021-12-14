import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { WalletInfo } from './state'

const actions: ActionTree<WalletInfo, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default actions
