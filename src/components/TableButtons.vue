<template>
  <div>
    <AdditionalButton @click.native="removeUser">Delete</AdditionalButton>
    <AdditionalButton @click.native="toEditPage({ user, input: columns })"
      >Edit</AdditionalButton
    >
  </div>
</template>

<script>
import routerMixins from "@/mixins/router";

import AdditionalButton from "@/components/common/AdditionalButton";

export default {
  props: {
    user: Object,
    users: Array,
    columns: Array,
  },
  components: {
    AdditionalButton,
  },
  mixins: [routerMixins],
  methods: {
    removeUser() {
      const indexToDelete = this.users.indexOf(this.user);
      console.log(indexToDelete);
      this.users.splice(indexToDelete, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>