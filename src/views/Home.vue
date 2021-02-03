<template>
  <div class="home">
    <div class="home__button">
      <MainButton>Add user</MainButton>
    </div>

    <UsersTable :users="users" :columns="information" :isButtons="true" />
  </div>
</template>

<script>
import defaultData from "@/assets/models/defaultUsers";

import UsersTable from "@/components/UsersTable";
import MainButton from "@/components/common/MainButton";

export default {
  components: {
    UsersTable,
    MainButton,
  },
  data() {
    return {
      users: [],
      information: ["name", "surname", "phone", "email"],
    };
  },
  methods: {},
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