<template>
  <div class='wallet'>
    <CoinList />
    <q-input v-model='from' standout label='from'>
      <template #before>
        <q-icon class='material-icons-outlined' name='account_balance_wallet' size='lg' />
      </template>
    </q-input>

    <q-input standout v-model='to' label='to'>
      <template #before>
        <q-icon class='material-icons-outlined' name='account_balance_wallet' size='lg' />
      </template>
    </q-input>

    <q-input standout v-model='amount' label='amount'>
      <template #before>
        <q-icon class='material-icons-outlined' name='paid' size='lg' />
      </template>
    </q-input>

    <q-btn
      no-caps
      color='primary'
      class='wallet-submit'
      @click='submit'
      :loading='loading'
    >
      <div>submit</div>
    </q-btn>
  </div>
</template>

<script setup lang='ts'>
import { ref, computed, defineAsyncComponent } from 'vue'
import { CreateTransactionRequest, GetTransactionRequest } from 'src/store/wallet/types'
import { ActionTypes } from 'src/store/wallet/action-types'
import { useStore } from 'src/store'
import { uid } from 'quasar'

const CoinList = defineAsyncComponent(() => import('../base/CoinList.vue'))

const from = ref('')
const to = ref('')
const amount = ref(0)
const store = useStore()

const loading = computed(() => store.getters.getWalletLoading)
// const error = computed(() => store.getters.getWalletError)
const coinname = computed(() => store.getters.getCoinName)
const submit = () => {
  let _from = from.value
  if (_from === '') {
    _from = 't3rbbfbyf6mykntb6xjrzche3vj63tczruzxozqnekd6o7pxjvlon36ure4fj7bgsc32yybcsjeshcvq5jopqq'
  }

  const id = uid()
  const createTransactionRequest: CreateTransactionRequest = {
    TransactionID: id,
    Name: coinname.value,
    From: _from,
    To: to.value,
    Amount: amount.value
  }
  store.dispatch(ActionTypes.CreateTransaction, createTransactionRequest)
  setTimeout(
    () => store.dispatch(ActionTypes.GetTransaction, { TransactionID: id } as GetTransactionRequest),
    10000
  )
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
</style>
