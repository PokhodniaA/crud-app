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
          <td v-for="key in columns" :key="key + user.id" :data-label="key">
            {{
              key === "name" || key === "surname"
                ? toUpperCase(user[key])
                : user[key]
            }}
          </td>
          <td v-if="isButtons">
            <TableButtons :users="users" :user="user" :columns="columns" />
          </td>
        </tr>
      </template>
    </Table>
  </div>
</template>

<script>
import TableButtons from "./TableButtons";
import Table from "./Table";

import methodsMixins from "@/mixins/additionalMethods.js";

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
  mixins: [methodsMixins],
};
</script>

<style lang="scss" scoped>
.userTable {
  margin: 50px;
  display: flex;
  justify-content: center;
}
</style>