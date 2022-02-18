<template>
  <div class='wallet'>
    <CoinList />
    <div>
      <q-btn
        no-caps
        color='primary'
        class='wallet-submit'
        :disable='loading'
        @click='handleSubmit'
      >
        submit
      </q-btn>
      <q-chip
        class='wallet-address material-icons-outlined'
        icon-right='content_copy'
        color='primary'
        outline
        dense
        square
        clickable
        @click='handleClick'
      >
        {{ address }}
      </q-chip>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { copyToClipboard } from 'quasar'
import { computed, onUnmounted, defineAsyncComponent } from 'vue'
import { useStore } from 'src/store/index'
import { ActionTypes } from 'src/store/wallet/action-types'
import { CreateWalletRequest } from 'src/store/wallet/types'
import { MutationTypes as coinMutationTypes } from 'src/store/coin/mutation-types'
import { MutationTypes } from 'src/store/wallet/mutation-types'

const CoinList = defineAsyncComponent(() => import('../base/CoinList.vue'))

const store = useStore()

// getter
const address = computed(() => store.getters.getWalletAddress)
// const error = computed(() => store.getters.getWalletError)
const loading = computed(() => store.getters.getWalletLoading)
const coinname = computed(() => store.getters.getCoinName)

// life cycle reset store
onUnmounted(() => {
  store.commit(MutationTypes.Reset, undefined)
  store.commit(coinMutationTypes.Reset, undefined)
})

// method
const handleClick = () => copyToClipboard(address.value)

const handleSubmit = () => {
  const createWalletRequest: CreateWalletRequest = {
    Name: coinname.value
  }
  store.dispatch(ActionTypes.CreateWallet, createWalletRequest)
}
</script>

<style scoped>
.wallet {
  width: 500px;
  height: 400px;
}

.wallet-submit {
  float: right;
}

.wallet-address {
  float: left;
  width: 400px;
  height: 30px;
  background-color: bisque;
}
</style>
