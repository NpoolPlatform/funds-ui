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

const loading = ref(false)

const submit = () => {
  console.log('submit')
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
