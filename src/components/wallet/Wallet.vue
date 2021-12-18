<template>
  <div>
    <q-tabs v-model="tab" class="text-teal">
      <q-tab name="create" class="material-icons-outlined" icon="add_circle" label="create"></q-tab>
      <q-tab name="transaction" class="material-icons-outlined" icon="paid" label="transaction"></q-tab>
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="create">
        <CreateWallet />
      </q-tab-panel>

      <q-tab-panel name="transaction">
        <transaction />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CreateWallet from './create/CreateWallet.vue'
import transaction from './transaction/Transaction.vue'

onMounted(() => {
  console.log('mounted')
})

const tab = ref('transaction')
</script>
