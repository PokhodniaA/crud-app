<template>
  <div class="mainButton">
    <slot></slot>
  </div>
</template>


<style lang="scss" scoped>
.mainButton {
  padding: 10px;
  margin: 10px; //  перенести в  home

  width: 30%;

  background: #fff;
  border: 1px solid #2c3e50;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    background: #fafafa;
    border: 1px solid #ec407a;
    cursor: pointer;
  }
}
</style>