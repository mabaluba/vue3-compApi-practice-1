<template>
  <ul class="ul">
    <!-- @mouseenter="selected = index" @mouseleave="selected = ''" -->
    <li class="li-item" v-for="(note, index) in props.notes" :key="index">
      <ListItem :note="note" @click="(selected = index), emits('show-modal')" />
      <ModalWindow
        class="text-modal"
        v-if="selected === index && !activeInput"
        :note="note"
        @close-modal="selected = -1"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ListItem from '../atoms/ListItem.vue';
import ModalWindow from '../atoms/ModalWindow.vue';

const props = defineProps<{
  notes: DataNotes[];
  activeInput: boolean;
}>();

interface DataNotes {
  name: string;
  type: string;
  text?: string | number;
}

const emits = defineEmits<{
  (e: 'show-modal'): void;
}>();

const selected = ref<number>(-1);
</script>

<style scoped lang="scss">
ul {
  padding: 40px 0 0 0;
  margin: 0 0 0 0;
}
.li-item {
  box-sizing: border-box;
  height: 30px;
  &:hover {
    background-color: var(--color-grey-xlight);
    transition: 0.2s;
    cursor: context-menu;
  }
}
.text-modal {
  box-sizing: border-box;
  width: 160px;
  padding: 10px 10px 10px;
  position: relative;
  left: 160px;
  bottom: 18px;
  height: max-content;
  background-color: #fff;
  border: 1px solid var(--color-grey-light);
  border-radius: 5px;
  box-shadow: 3px 3px 3px var(--color-grey-xlight);
}
</style>
