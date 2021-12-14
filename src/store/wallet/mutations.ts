import { MutationTree } from 'vuex'
import { WalletInfo } from './state'

const mutation: MutationTree<WalletInfo> = {
  updateName (state: WalletInfo, payload: string) {
    state.balanceStr = payload
  }
}

export default mutation
