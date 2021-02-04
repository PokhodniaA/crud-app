<template>
  <div class="editPage">
    <div class="editPage__form">
      <EditForm :dataObject="user" :information="information" :users="users" />
    </div>
  </div>
</template>

<script>
import EditForm from "@/components/EditForm";

export default {
  data() {
    return {
      user: {},
      users: [],
      information: [],
    };
  },
  components: {
    EditForm,
  },

  created() {
    this.user = this.$route.params.user || {};
    this.information = this.$route.params.input;
    this.users = this.$route.params.users;
  },
};
</script>

<style lang="scss" scoped>
.editPage {
  &__form {
    margin: 50px auto;
  }
}
</style>