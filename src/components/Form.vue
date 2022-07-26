<template>
  <form class="form">
    <div class="form__field">
      <label class="form__label">Наименование товара</label>
      <input
        type="text"
        class="form__input"
        placeholder="Введите наименование товара"
      />
      <span class="form__error">Поле является обязательным</span>
    </div>
    <div class="form__field">
      <label class="form__label">Описание товара</label>
      <textarea
        class="form__input form__input_height"
        placeholder="Введите описание товара"
      />
    </div>
    <div class="form__field">
      <label class="form__label">Ссылка на изображение товара</label>
      <input type="text" class="form__input" placeholder="Введите ссылку" />
      <span class="form__error">Поле является обязательным</span>
    </div>
    <div class="form__field">
      <label class="form__label">Цена товара</label>
      <input type="text" class="form__input" placeholder="Введите цену" />
      <span class="form__error">Поле является обязательным</span>
    </div>
    <button class="form__button" type="submit">Добавить товар</button>
  </form>
</template>

<script>
export default {
  name: "FormBlock",
};
</script>

<style lang="scss" scoped>
.form {
}
</style>
