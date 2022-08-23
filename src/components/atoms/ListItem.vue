<template>
  <div class="li">
    <!-- <img class="icon" :src="'/icons/' + DefineIcon(props.note?.type)" /> -->
      <img class="icon" :src="DefineIcon(props.note?.type)" />
    <span class="span">{{ props.note?.name.toUpperCase() }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  note: DataNotes;
}>();

interface DataNotes {
  name: string;
  type: string;
  text?: string | number;
}

function DefineIcon(type: string): string | undefined {
  switch (type) {
  case 'UUID':
    return 'id.png';
  case 'String':
    return 'https://gitlab.com/kliukvin.max/practicevue3/-/blob/develop/my-project/public/icons/abc.png';
  default:
    break;
  }
}
// function DefineIcon(type: string): string | undefined {
//   switch (type) {
//   case 'UUID':
//     return 'id.png';
//   case 'String':
//     return 'abc.png';
//   default:
//     break;
//   }
// }
</script>

<style scoped lang="scss">
.li {
  height: 30px;
  padding: 5px 40px;
}
.icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  mix-blend-mode: multiply;
}
.span {
  padding: 0 0 0 10px;
  font-size: 12px;
  font-weight: bold;
}
</style>
