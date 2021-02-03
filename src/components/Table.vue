<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(name, index) in columns" :key="name + index">
          {{ toUpperCase(name) }}
        </th>
        <th v-if="isButtons" />
      </tr>
    </thead>

    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td v-for="(key, index) in columns" :key="key + index">
          {{ key == "phone" ? `+${user[key]}` : user[key] }}
          <!-- Отредактировать, стоит передать это через слот -->
        </td>
        <td v-if="isButtons">
          <TableButtons :users="users" :user="user" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import TableButtons from "./TableButtons";

export default {
  props: {
    users: Array,
    columns: Array,
    isButtons: Boolean,
  },
  components: {
    TableButtons,
  },
  data() {
    return {};
  },
  methods: {
    toUpperCase(word) {
      return word[0].toUpperCase() + word.slice(1);
    },
  },
};
</script>

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