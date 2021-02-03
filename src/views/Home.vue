<template>
  <div class="home">
    <div class="home__button">
      <MainButton>Add user</MainButton>
    </div>

    <div class="home__table">
      <Table :users="users" :columns="columns" :isButtons="true" />
    </div>
  </div>
</template>

<script>
import defaultData from "@/assets/models/defaultUsers";

import Table from "@/components/Table";
import MainButton from "@/components/common/MainButton";

export default {
  components: {
    Table,
    MainButton,
  },
  data() {
    return {
      users: [],
      columns: ["name", "surname", "phone", "email"],
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

  &__table {
    margin: 50px;
    display: flex;
    justify-content: center;
  }
}
</style>