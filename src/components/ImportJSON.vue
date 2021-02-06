<template>
  <div class="importJSON">
    <div class="importJSON__header">Import data from JSON file.</div>

    <form class="importJSON__form">
      <label for="inputJSON" class="importJSON__label">Upload</label>
      <input
        type="file"
        accept=".json"
        id="inputJSON"
        class="importJSON__input"
        @change="addFile"
      />
    </form>
  </div>
</template>

<script>
import routerMixins from "@/mixins/router";
import validateFormsMixins from "@/mixins/validateForms";

export default {
  props: {
    users: Array,
    information: Array,
  },
  mixins: [routerMixins, validateFormsMixins],
  methods: {
    addFile(event) {
      const fileList = event.target.files || event.dataTransfer.files;
      const file = fileList.item(0);

      let reader = new FileReader();
      reader.readAsText(file);

      reader.onload = () => {
        const result = reader.result;
        const JSONRes = JSON.parse(result);
        this.addToUsers(JSONRes);
      };
    },
    addToUsers(data) {
      let success;
      if (Array.isArray(data)) {
        success = this.validateUsers(data);
      } else if (typeof data == "object") {
        success = this.validateUser(data);
      } else {
        alert("Your file is  wrong");
      }
      if (success) {
        this.showNewUsers(this.users);
      }
    },
    validateUsers(data) {
      let success = true;
      for (let i = 0; i < data.length; i++) {
        const user = data[i];
        const userValid = this.validateUser(user);
        if (!userValid) {
          success = false;
          break;
        }
      }
      return success;
    },
    validateUser(user) {
      const includesForm = this.isCorrectData(this.information, user);

      if (includesForm) {
        this.pushUser(user, this.users);
        return true;
      } else {
        alert("Your user incorrect");
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.importJSON {
  border-top: 1px solid #2c3e50;

  &__header {
    margin-top: 10px;
  }
  &__form {
    margin-top: 20px;
  }
  &__label {
    padding: 5px;

    transition: 0.2s;
    border: 1px solid #2c3e50;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    &:hover {
      cursor: pointer;
      background-color: #ec407a;
      color: #fff;
    }
  }

  &__input {
    display: none;
  }
}
</style>