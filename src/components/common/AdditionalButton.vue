<template>
  <div class="additionalButton">
    <slot></slot>
  </div>
</template>


<style lang="scss" scoped>
.additionalButton {
  padding: 3px;
  margin: 5px;

  background: #fff;
  border: 1px solid #2c3e50;

  &:hover {
    background: #fafafa;
    border: 1px solid #ec407a;
    cursor: pointer;
  }
}
</style>