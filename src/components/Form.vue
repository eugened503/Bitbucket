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
    <div class="field-prise form__field">
      <label class="form__label">Цена товара</label>
      <input
        type="text"
        class="input-prise form__input"
        :class="{ error: v$.price.$errors.length }"
        placeholder="Введите цену"
        v-model="price"
        :v="v$.price"
        v-maska="['# ###', '## ###', '### ###', '#### ###']"
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
  <modal :showModal="showModal" @close="showModal = false">
    <template v-slot:header>
      <h3>Карточка успешно добавлена!</h3>
    </template>
    <template v-slot:body>
      <p>Поздравляем! Карточка успешно добавлена в общий список товаров! 🎉</p>
    </template>
  </modal>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import Modal from "@/components/Modal.vue";

export default {
  name: "FormBlock",
  components: { Modal },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      link: null,
      name: null,
      desc: null,
      price: null,
      showModal: false,
    };
  },

  methods: {
    addCard() {
      this.$store.dispatch("addCard", {
        id: Math.random().toString(16).slice(2),
        link: this.link,
        name: this.name,
        desc: this.desc,
        price: this.price,
      });

      this.name = this.desc = this.link = this.price = "";
      this.v$.$reset();
      setTimeout(() => (this.showModal = true), 1000);
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
  padding: 18px 24px 24px 24px;
  background: $main-bg-color;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  .field-prise {
    margin: 0;
  }

  &__field {
    .textarea {
      padding: 10px 16px 11px;
      margin: 0;
      min-height: 109px;
      resize: none;
      outline: none;

      &::after {
        background: none;
      }
    }

    .input-prise {
      margin: 1px 0 0;
    }

    &:nth-child(2) {
      label::after {
        background: none;
      }
    }

    &:nth-child(3) {
      margin: 12px 0 0;
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
      right: -4px;
      display: block;
      width: 4px;
      height: 4px;
      background: $color-carrot;
      border-radius: 50%;
    }
  }

  &__errors {
    margin: 4px 0 0;
    min-height: 7px;
  }

  &__input {
    display: block;
    margin: 3px 0 0;
    width: 100%;
    padding: 10px 16px 11px;
    background: $main-bg-color;
    border: 1px solid transparent;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 12px;
    line-height: 15px;
    color: $color-black;

    &::placeholder {
      font-size: 12px;
      line-height: 15px;
      color: $color-gray;
    }

    &.error {
      border: 1px solid $color-carrot;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      animation: fade-in 0.7s ease-in;
    }
  }

  &__error {
    font-size: 8px;
    line-height: 7px;
    letter-spacing: -0.02em;
    color: $color-carrot;
    animation: fade-in 0.7s ease-in;

    &.active {
      display: block;
    }
  }

  &__button {
    width: 100%;
    margin: 13px 0 0;
    padding: 10px 92px 11px 96px;
    background: $color-green;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: $color-white;
    transition: background 0.3s ease-in;

    &:hover {
      background: #54ac46;
    }

    &:disabled {
      color: $color-gray;
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
