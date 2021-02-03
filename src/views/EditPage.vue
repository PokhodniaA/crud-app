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
  props: {
    // user: Object,
    // information: Array,
  },
  components: {
    EditForm,
  },
  data() {
    // Временные данные
    return {
      user: {
        name: "Kate",
        surname: "Nilson",
        phone: 380501112233,
        email: "Kate@gmail.com",
        id: 0,
      },
      information: ["name", "surname", "phone", "email"],
    };
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