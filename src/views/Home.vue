<template>
  <div class="home">
    <div class="home__button">
      <MainButton @click.native="toEditPage({ users, input: information })"
        >Add user
      </MainButton>
    </div>

    <UsersTable :users="users" :columns="information" :isButtons="true" />
  </div>
</template>

<script>
import UsersTable from "@/components/UsersTable";
import MainButton from "@/components/common/MainButton";

import defaultData from "@/assets/models/defaultUsers";
import tableInfo from "@/assets/models/tableInfo";
import routerMixins from "@/mixins/router";

export default {
  components: {
    UsersTable,
    MainButton,
  },
  mixins: [routerMixins],
  data() {
    return {
      users: [],
      information: [],
    };
  },
  created() {
    const setDefaultData = () => {
      this.users = defaultData;
      localStorage.setItem("users", JSON.stringify(this.users));
    };

    const localUsers = localStorage.getItem("users");
    this.information = tableInfo;
    localUsers ? (this.users = JSON.parse(localUsers)) : setDefaultData();
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