<template>
  <form class="editForm">
    <input
      type="text"
      v-for="info in information"
      v-model="user[info]"
      :key="info"
      class="editForm__input"
    /><!-- переделать на key=user.id -->
  </form>
</template>

<script>
export default {
  props: {
    dataObject: Object,
    information: Array,
  },
  data() {
    return {
      user: {},
    };
  },

  created() {
    if (this.dataObject) {
      this.user = this.dataObject;
    }

    console.log(this.information, "editform");
  },
};
</script>

<style lang="scss" scoped>
.editForm {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__input {
    margin-bottom: 10px;
    width: 40%;
    padding: 5px;

    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;

    border: 1px solid #2c3e50;
    border-radius: 5px;
    transition: 0.2s;

    &:focus {
      outline: none;
      border: 1px solid #ec407a;
      border-radius: 5px;
    }
  }
}
</style>