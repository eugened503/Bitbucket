<template>
  <form class="form">
    <div class="form__field">
      <label class="form__label">Наименование товара</label>
      <input
        type="text"
        class="form__input"
        placeholder="Введите наименование товара"
      />
      <div class="form__error-wrapper">
        <span class="form__error">Поле является обязательным</span>
      </div>
    </div>
    <div class="form__field">
      <label class="form__label">Описание товара</label>
      <textarea
        class="textarea form__input"
        placeholder="Введите описание товара"
      />
    </div>
    <div class="form__field">
      <label class="form__label">Ссылка на изображение товара</label>
      <input type="text" class="form__input" placeholder="Введите ссылку" />
      <div class="form__error-wrapper">
        <span class="form__error">Поле является обязательным</span>
      </div>
    </div>
    <div class="form__field">
      <label class="form__label">Цена товара</label>
      <input type="text" class="form__input" placeholder="Введите цену" />
      <div class="form__error-wrapper">
        <span class="form__error">Поле является обязательным</span>
      </div>
    </div>
    <button class="form__button" type="submit" disabled>Добавить товар</button>
  </form>
</template>

<script>
export default {
  name: "FormBlock",
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 332px;
  padding: 24px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  @media screen and (max-width: $laptop-small - 1px) {
    max-width: none;
  }

  &__field {
    .textarea {
      min-height: 108px;
      resize: none;
      outline: none;

      &::after {
        background: none;
      }
    }

    &:nth-child(2) {
      label::after {
        background: none;
      }
    }

    &:nth-child(3) {
      margin: 16px 0 0;
    }
  }

  &__label {
    position: relative;
    display: inline-block;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485e;

    &::after {
      content: "";
      position: absolute;
      top: 0px;
      right: -6px;
      display: block;
      width: 4px;
      height: 4px;
      background: $color-carrot;
      border-radius: 50%;
    }
  }
  &__input {
    display: block;
    margin: 4px 0 0;
    width: 100%;
    padding: 10px 16px 11px;
    background: #fffefb;
    border: none;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 12px;
    line-height: 15px;
    color: #3f3f3f;

    &::placeholder {
      font-size: 12px;
      line-height: 15px;
      color: #b4b4b4;
    }
  }

  &__error-wrapper {
    min-height: 16px;
  }
  &__error {
    display: none;
    margin: 4px 0 0;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: $color-carrot;

    &.active {
      display: block;
    }
  }

  &__button {
    width: 100%;
    margin: 24px 0 0;
    padding: 10px 92px 11px 96px;
    background: #7bae73;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    transition: background 0.3s ease-in;

    &:hover {
      background: #54ac46;
    }

    // &:disabled {
    //   color: #b4b4b4;
    //   background: #eeeeee;
    //   box-shadow: none;
    // }
  }
}
</style>
