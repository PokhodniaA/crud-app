<template>
  <div class="editPage">
    <div class="editPage__form">
      <EditForm :dataObject="user" :information="information" />
    </div>
  </div>
</template>

<script>
import EditForm from "@/components/EditForm";

export default {
  data() {
    return {
      user: {},
      information: [],
    };
  },
  components: {
    EditForm,
  },

  created() {
    this.user = this.$route.params.user || {};
    this.information = this.$route.params.input;
    console.log(this.user, this.information, "editpage");
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