<template>
  <div>
    <AdditionalButton @click.native="removeUser">Delete</AdditionalButton>
    <AdditionalButton>Edit</AdditionalButton>
  </div>
</template>

<script>
import AdditionalButton from "@/components/common/AdditionalButton";

export default {
  props: {
    user: Object,
    users: Array,
  },
  components: {
    AdditionalButton,
  },
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