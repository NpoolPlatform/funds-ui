<template>
  <div class="wallet">
    <CoinList />
    <q-input standout v-model="from" label="from">
      <template v-slot:before>
        <q-icon class="material-icons" name="o_account_balance_wallet" size="lg" />
      </template>
    </q-input>

    <q-input standout v-model="to" label="to">
      <template v-slot:before>
        <q-icon class="material-icons" name="o_account_balance_wallet" size="lg" />
      </template>
    </q-input>

    <q-input standout v-model="amount" label="amount">
      <template v-slot:before>
        <q-icon class="material-icons" name="o_paid" size="lg" />
      </template>
    </q-input>

    <q-btn no-caps color="primary" class="wallet-submit" @click="submit" :loading="loading">
      <div>submit</div>
    </q-btn>
    {{ address }}
  </div>
</template>

<script setup lang="ts">
import CoinList from '../base/CoinList.vue'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'src/store/index'
import { ActionTypes } from 'src/store/wallet/action-types'
const store = useStore()

const from = ref('')
const to = ref('')
const amount = ref(0)
const loading = ref(false)
const address = computed(() => store.getters.getAddress)

onMounted(() => store.dispatch(ActionTypes.CreateWallet, { Name: 'FIL' }))

const submit = () => {
  console.log(store.getters, address.value)
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
