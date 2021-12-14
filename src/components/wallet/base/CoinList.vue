<template>
  <div>
    <q-select
      v-model="coinname"
      :options="coinlist"
      option-value="id"
      option-label="desc"
      option-disable="inactive"
      label="CoinName"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const coinlist = [
  { id: 'FIL', desc: 'FIL', inactive: false },
  { id: 'BTC', desc: 'BTC', inactive: true },
  { id: 'Spashmesh', desc: 'Spashmesh', inactive: true }
]
const coinname = ref('')
</script>
