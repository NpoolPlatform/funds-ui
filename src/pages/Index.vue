<template>
  <q-page class='row items-center justify-evenly'>
    <Wallet title='wallet' active />
  </q-page>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'
const Wallet = defineAsyncComponent(() => import('src/components/wallet/Wallet.vue'))
</script>
