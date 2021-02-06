<template>
  <div class="editPage">
    <div class="editPage__form">
      <EditForm :dataObject="user" :information="information" :users="users" />
    </div>
    <div class="editPage__import">
      <ImportJSON :users="users" :information="information" />
    </div>
  </div>
</template>

<script>
import EditForm from "@/components/EditForm";
import ImportJSON from "@/components/ImportJSON";

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
    ImportJSON,
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