<template>
  <div class="products">
    <div class="products__header">
      <h1 class="products__title">Добавление товара</h1>
      <Select />
    </div>
    <div class="products__body">
      <Form />
      <Suspense>
        <template #default>
          <Cards />
        </template>
        <template #fallback>
          <Preloader />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import Select from "@/components/Select.vue";
import Form from "@/components/Form.vue";
import Preloader from "@/components/Preloader.vue";

import { defineAsyncComponent } from "vue";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const Cards = defineAsyncComponent(async () => {
  await sleep(1000);
  return import("@/components/Cards.vue");
});

export default {
  components: { Select, Form, Cards, Preloader },
  name: "ProductsBlock",
};
</script>

<style lang="scss" scoped>
.products {
  color: $color-black;
  max-width: 1440px;
  min-width: 360px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 32px;

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__title {
    margin: 0 10px 0 0;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
  }

  &__body {
    margin: 16px 0 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: $tablet - 1px) {
      display: block;
    }
  }
}
</style>
