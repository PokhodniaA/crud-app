<template>
  <div class="home">
    <div class="home__button">
      <MainButton @click.native="toEditPage({ users, input: information })"
        >Add user</MainButton
      >
    </div>

    <UsersTable :users="users" :columns="information" :isButtons="true" />
  </div>
</template>

<script>
import defaultData from "@/assets/models/defaultUsers";
import routerMixins from "@/mixins/router";

import UsersTable from "@/components/UsersTable";
import MainButton from "@/components/common/MainButton";

export default {
  components: {
    UsersTable,
    MainButton,
  },
  mixins: [routerMixins],
  data() {
    return {
      users: [],
      information: ["name", "surname", "phone", "email"],
    };
  },
  created() {
    const localUsers = localStorage.getItem("users");
    if (localUsers) {
      this.users = JSON.parse(localUsers);
    } else {
      this.users = defaultData;
      localStorage.setItem("users", JSON.stringify(this.users));
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__button {
    display: flex;
    justify-content: center;
  }
}
</style>