<template>
  <input v-model="searchValue"  type="text" class="input" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const emit = defineEmits<{
  (e: 'makeSearch', searchValue: string): void
}>();

const searchValue = ref<string>('');

watch(searchValue, () => {
  emit('makeSearch', searchValue.value);
});

</script>

<style scoped lang="scss">
.input {
  height: 24px;
  background-color: var(--color-grey-superlight);
  border: 1px solid var(--color-grey-superlight);  
  border-radius: 3px;
  padding-left: 10px;
    &::placeholder {
      color: var(--color-grey-light);
      font-size: 10px;
      font-weight:bold;
      text-transform: uppercase;
    }
    &:focus{
      outline: none;
      border: 1px solid var(--color-grey-light);
    }
}
</style>
