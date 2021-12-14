<template>
  <div class="wallet">
    <CoinList />
    <q-btn no-caps color="primary" class="wallet-submit" @click="submit" :loading="loading">
      <div>submit</div>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import CoinList from '../base/CoinList.vue'
import { ref } from 'vue'
import { api } from 'boot/axios'

const loading = ref(false)

const submit = () => {
  console.log('submit')
  loading.value = true
  setTimeout(() => { loading.value = false }, 1000)
  api.post('', {}).then((response) => console.log('response:', response)).catch(e => console.log('', e))
  loading.value = false
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
