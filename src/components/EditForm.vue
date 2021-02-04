<template>
  <form class="editForm">
    <input
      :type="getInputType(info)"
      :placeholder="info"
      v-for="info in information"
      v-model="user[info]"
      :key="info"
      class="editForm__input"
    /><!-- переделать на key=user.id и можно добавить label -->

    <MainButton @click.native="setUser">Сохранить</MainButton>
  </form>
</template>

<script>
import routerMixins from "@/mixins/router";

import MainButton from "./common/MainButton";

export default {
  props: {
    dataObject: Object,
    users: Array,
    information: Array,
  },
  components: {
    MainButton,
  },
  mixins: [routerMixins],
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
      const filledForm = this.information.every((item) => {
        switch (item) {
          case "phone":
            return this.validatePhone(this.user[item]);
          case "email":
            return this.validateEmail(this.user[item]);
          default:
            return !!this.user[item];
        }
      });

      if (filledForm && !this.isNewUser) {
        localStorage.setItem("users", JSON.stringify(this.users));
        this.toMainPage();
      } else if (filledForm && this.isNewUser) {
        this.createNewUser();
      } else {
        alert("Fill in the fields correctly");
      }
    },
    validatePhone(phone) {
      const re = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
      return re.test(phone);
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    createNewUser() {
      const newID = this.users[this.users.length - 1].id + 1;
      this.user.id = newID;
      this.users.push(this.user);
      localStorage.setItem("users", JSON.stringify(this.users));
      this.toMainPage();
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

  &__input {
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
</style>