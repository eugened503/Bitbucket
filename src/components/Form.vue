<template>
  <form class="form">
    <div class="form__field">
      <label class="form__label">Наименование товара</label>
      <input
        v-model="name"
        :v="v$.name"
        type="text"
        class="form__input"
        :class="{ error: v$.name.$errors.length }"
        placeholder="Введите наименование товара"
      />
      <div class="form__errors">
        <div v-for="(error, index) of v$.name.$errors" :key="index">
          <p class="form__error">{{ error.$message }}</p>
        </div>
      </div>
    </div>
    <div class="form__field">
      <label class="form__label">Описание товара</label>
      <textarea
        class="textarea form__input"
        placeholder="Введите описание товара"
        v-model="desc"
      />
    </div>
    <div class="form__field">
      <label class="form__label">Ссылка на изображение товара</label>
      <input
        type="text"
        class="form__input"
        :class="{ error: v$.link.$errors.length }"
        v-model="link"
        :v="v$.link"
        placeholder="Введите ссылку"
      />
      <div class="form__errors">
        <div v-for="(error, index) of v$.link.$errors" :key="index">
          <p class="form__error">{{ error.$message }}</p>
        </div>
      </div>
    </div>
    <div class="form__field">
      <label class="form__label">Цена товара</label>
      <input
        type="text"
        class="form__input"
        :class="{ error: v$.price.$errors.length }"
        placeholder="Введите цену"
        v-model="price"
        :v="v$.price"
        v-maska="'## ###'"
      />
      <div class="form__errors">
        <div v-for="(error, index) of v$.price.$errors" :key="index">
          <p class="form__error">{{ error.$message }}</p>
        </div>
      </div>
    </div>
    <button
      class="form__button"
      type="button"
      :disabled="v$.$invalid"
      @click="addCard"
    >
      Добавить товар
    </button>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export default {
  name: "FormBlock",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      link: null,
      name: null,
      desc: null,
      price: null,
    };
  },

  methods: {
    addCard() {
      // console.log({
      //   link: this.link,
      //   name: this.name,
      //   desc: this.desc,
      //   price: this.price,
      // });

      this.$store.dispatch("addCard", {
        link: this.link,
        name: this.name,
        desc: this.desc,
        price: this.price,
      });

      this.name = this.desc = this.link = this.price = "";
      this.v$.$reset();
      //console.log(this.$store.state.items);
    },
  },

  validations() {
    return {
      name: {
        $autoDirty: true,
        required: helpers.withMessage("Поле является обязательным", required),
      },
      link: {
        $autoDirty: true,
        required: helpers.withMessage("Поле является обязательным", required),
      },
      price: {
        $autoDirty: true,
        required: helpers.withMessage("Поле является обязательным", required),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
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

  &__errors {
    margin: 4px 0 0;
    min-height: 10px;
  }

  &__input {
    display: block;
    margin: 4px 0 0;
    width: 100%;
    padding: 10px 16px 11px;
    background: #fffefb;
    border: 1px solid transparent;
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

    &.error {
      border: 1px solid #ff8484;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      animation: fade-in 0.7s ease-in;
    }
  }

  &__error {
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: $color-carrot;
    animation: fade-in 0.7s ease-in;

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
    transition: background 0.7s ease-in;

    &:hover {
      background: #54ac46;
    }

    &:disabled {
      color: #b4b4b4;
      background: #eeeeee;
      box-shadow: none;
    }
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
