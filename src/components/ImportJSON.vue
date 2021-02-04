<template>
  <div class="importJSON">
    <div class="importJSON__header">Импортировать данные из файла JSON</div>

    <form class="importJSON__form">
      <label for="inputJSON" class="importJSON__label">Загрузить Файл</label>
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

export default {
  props: {
    users: Array,
  },
  mixins: [routerMixins],
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
      data.forEach((user) => {
        user.id = this.users[this.users.length - 1].id + 1;
        this.users.push(user);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.toMainPage();
      });
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