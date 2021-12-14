<template>
  <div>
    <q-tabs v-model="tab" class="text-teal">
      <q-tab name="create" class="material-icons" icon="o_add_circle" label="create"></q-tab>
      <q-tab name="transaction" class="material-icons" icon="o_paid" label="transaction"></q-tab>
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
import { ref } from 'vue'
import CreateWallet from './create/CreateWallet.vue'
import transaction from './transaction/Transaction.vue'

const tab = ref('transaction')
</script>
