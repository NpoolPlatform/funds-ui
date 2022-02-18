<template>
  <div>
    <q-tabs v-model='tab' class='text-teal'>
      <q-tab name='create' class='material-icons-outlined' icon='add_circle' label='create' />
      <q-tab name='transaction' class='material-icons-outlined' icon='paid' label='transaction' />
    </q-tabs>

    <q-tab-panels v-model='tab' animated>
      <q-tab-panel name='create'>
        <CreateWallet />
      </q-tab-panel>

      <q-tab-panel name='transaction'>
        <Transaction />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup lang='ts'>
import { ref, defineAsyncComponent } from 'vue'
const CreateWallet = defineAsyncComponent(() => import('./create/CreateWallet.vue'))
const Transaction = defineAsyncComponent(() => import('./transaction/Transaction.vue'))

const tab = ref('transaction')
</script>
