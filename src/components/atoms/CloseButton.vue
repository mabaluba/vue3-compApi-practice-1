<template>
  <div>
    <button class="button" type="button">x</button>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.button {
  // content: '✖';
  border: #fff;
  background-color: #fff;
  color: var(--color-grey-light);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding: 0 6px 3px 6px;
  &:hover {
    border-radius: 3px;
    border: 1px solid var(--color-grey-light);
  }
}
</style>