import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { WalletInfo } from './state'

const getters: GetterTree<WalletInfo, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default getters
