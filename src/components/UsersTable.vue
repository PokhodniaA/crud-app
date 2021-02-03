<template>
  <div class="userTable">
    <Table>
      <template v-slot:thead>
        <tr>
          <th v-for="(name, index) in columns" :key="name + index">
            {{ toUpperCase(name) }}
          </th>
          <th v-if="isButtons" />
        </tr>
      </template>

      <template v-slot:tbody>
        <tr v-for="user in users" :key="user.id">
          <td v-for="key in columns" :key="key + user.name">
            {{ key == "phone" ? `+${user[key]}` : user[key] }}
            <!-- Отредактировать, стоит передать это через слот -->
          </td>
          <td v-if="isButtons">
            <TableButtons :users="users" :user="user" />
          </td>
        </tr>
      </template>
    </Table>
  </div>
</template>

<script>
import TableButtons from "./TableButtons";
import Table from "./Table";

export default {
  props: {
    users: Array,
    columns: Array,
    isButtons: Boolean,
  },
  components: {
    TableButtons,
    Table,
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
.userTable {
  margin: 50px;
  display: flex;
  justify-content: center;
}
</style>