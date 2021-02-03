<template>
  <div class="home">
    <div class="home__button">
      <MainButton @click.native="toEditPage({ input: information })"
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
    this.users = defaultData;
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