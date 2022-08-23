<template>
  <div>
    <div class="div-span-button">
      <span class="name">{{ props.note?.name.toUpperCase() }}</span>
      <CloseButton class="buttonModal" @click="emits('close-modal')"/>
    </div>
    <hr class="hr-line" />
    <span class="text" v-if="props.note?.text">{{ props.note?.text }}</span>
    <span class="epmtyText" v-else>значение не заполнено...</span>
  </div>
</template>

<script setup lang="ts">
import CloseButton from './CloseButton.vue';

  interface DataNotes {
    name: string;
    type: string;
    text?: string | number;
  }

const props = defineProps<{
  note: DataNotes
}>();

const emits = defineEmits<{
  (e:'close-modal'): void
}>();
</script>

<style scoped lang="scss">
.div-span-button {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.hr-line {
  height: 1px;
  border: 0;
  border-top: 1px solid var(--color-grey-light);
  padding: 0;
}
.name {
  font-size: xx-small;
  text-align: center;
  font-weight: bold;
}
.text {
  font-size: small;
}
.epmtyText {
  font-size: xx-small;
  color: var(--color-grey-light);
}
.buttonModal {
  position: absolute;
  // display: flex;
  // justify-content:flex-start;
  margin: -25px 0 0 120px;
}
</style>
