# Vue+Vuex+TypeScript

## vue
```ts
<script setup lang="ts">

</script>
```

### defineProps defineEmits
```ts
const props = defineProps<{
    foo: string
    bar?: number
}>()

// with default values
interface Props {
    msg?: string
    labels?: string[]
}
const props = withDefaults(defineProps<Props>(), {
    msg: 'hello',
    labels: () => ['one', 'two']
})

const emit = defineEmits<{
    (e: 'change', id: number): void
    (e: 'update', value: string): void
}>()
```

### useSlots useAttrs
### style
```js
<style scoped>
.example {
    color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
```

### pre-commit
### async/await

## vuex

## typescript

## rxjs

## nginx

+ hide server info
+ gzip
+ cache