<template>
  <table class="table">
    <thead>
      <slot name="thead"></slot>
    </thead>

    <tbody>
      <slot name="tbody"></slot>
    </tbody>
  </table>
</template>



<style lang="scss" scoped>
.table {
  width: 80%;
  border-collapse: collapse;
  border: 3px solid #2c3e50;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  thead {
    background-color: #eeeeee;
    border: 2px solid #2c3e50;

    th {
      letter-spacing: 2px;
      padding: 5px;
    }
  }

  tbody {
    td {
      text-align: center;
      letter-spacing: 1px;
      padding: 5px;
    }

    tr {
      &:nth-child(even) {
        background-color: #fafafa;
      }

      &:hover {
        background-color: #eeeeee;
      }
    }
  }
}
</style>