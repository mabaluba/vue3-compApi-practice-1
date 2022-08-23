<template>
    <div class="main">
        <AInput class="input"
          @makeSearch="FilterSearch"
          :placeholder="searcPls"
          @click="inputClicked = true"
        />
        <UlComponent
          :notes="filteresNotes ? filteresNotes : dataNotes" :activeInput="inputClicked"
          @show-modal="inputClicked = false"
        />
    </div>
</template>

<script setup lang="ts">
import UlComponent from '../molecules/UlComponent.vue';
import AInput from '../atoms/AInput.vue';
import notesData from '@/assets/notesData.json';
import { ref, unref } from 'vue';

interface DataNotes{
    name: string,
    type: string,
    text?: string | number
}

const searcPls = 'Поиск...';
const inputClicked = ref<boolean>(false);
const filteresNotes = ref<DataNotes[]>();
const dataNotes: DataNotes[] = notesData;

function FilterSearch(nameValue : string | null): void {
  nameValue
    ? filteresNotes.value = FindItems(nameValue)
    : filteresNotes.value = dataNotes;
}

function FindItems(val: string) : DataNotes[] {
  return dataNotes.filter(i => i.name.toLowerCase().includes(unref(val)));
}
</script>

<style scoped lang="scss">
.main{
  display: flex;
  flex-direction: column;  
  border: solid #d6d6d6 1px;
  border-radius: 5px;
  width: 300px;
  padding: 40px 0 40px 0;
}
.input{
    margin: 0 40px 0 40px;
}
</style>