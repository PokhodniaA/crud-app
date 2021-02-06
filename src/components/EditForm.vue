<template>
  <form class="editForm">
    <div
      v-for="(info, index) in information"
      :key="index"
      class="editForm__field"
    >
      <label class="editForm__label">{{ toUpperCase(info) }}</label>
      <input
        :type="getInputType(info)"
        :placeholder="info"
        v-model="user[info]"
        class="editForm__input"
      />
    </div>

    <MainButton @click.native="setUser">Сохранить</MainButton>
  </form>
</template>

<script>
import MainButton from "./common/MainButton";

import routerMixins from "@/mixins/router";
import methodsMixins from "@/mixins/additionalMethods.js";
import validateFormsMixins from "@/mixins/validateForms";

export default {
  props: {
    dataObject: Object,
    users: Array,
    information: Array,
  },
  components: {
    MainButton,
  },
  mixins: [routerMixins, methodsMixins, validateFormsMixins],
  data() {
    return {
      user: {},
      isNewUser: false,
    };
  },
  methods: {
    getInputType(key) {
      switch (key) {
        case "phone":
          return "tel";
        case "email":
          return "email";
        default:
          return "text";
      }
    },
    setUser() {
      const filledForm = this.isCorrectData(this.information, this.user);

      if (filledForm && !this.isNewUser) {
        localStorage.setItem("users", JSON.stringify(this.users));
        this.toMainPage();
      } else if (filledForm && this.isNewUser) {
        this.createNewUser();
      } else {
        alert("Fill in the fields correctly");
      }
    },
    createNewUser() {
      this.pushUser(this.user, this.users);
      this.showNewUsers(this.users);
    },
  },
  created() {
    const isEmptyObject = Object.keys(this.dataObject).length;
    isEmptyObject ? (this.user = this.dataObject) : (this.isNewUser = true);
  },
};
</script>

<style lang="scss" scoped>
.editForm {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__field {
    display: flex;
    justify-content: flex-end;
    padding: 5px;
    min-width: 50%;
  }

  &__label {
    text-align: start;
    padding: 5px;
    flex: 1;
  }

  &__input {
    flex: 4; //  поправить адаптивность

    margin-bottom: 10px;
    min-width: 40%;
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

@media screen and (max-width: 700px) {
  .editForm {
    &__field {
      width: 90%;
    }
  }
}
</style>