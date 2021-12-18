<template>
  <div>
    <q-select
      v-model="coinname"
      :options="coinlist"
      option-value="id"
      option-label="desc"
      option-disable="inactive"
      label="CoinName"
      emit-value
      map-options
    />
  </div>
</template>

<script setup lang="ts">
import { MutationTypes } from 'src/store/coin/mutation-types'
import { computed } from 'vue'
import { useStore } from '../../../store'
// should fetch from api
const coinlist = [
  { id: 'FIL', value: 'FIL', desc: 'FIL', inactive: false },
  { id: 'BTC', value: 'BTC', desc: 'BTC', inactive: true },
  { id: 'Spashmesh', value: 'Spashmesh', desc: 'Spashmesh', inactive: true }
]

const store = useStore()
const coinname = computed({
  get (): string {
    return store.getters.getCoinName
  },
  set (coinname: string): void {
    store.commit(MutationTypes.SetName, coinname)
  }
})
</script>
