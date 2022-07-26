<template>
  <div class="products">
    <h1 class="products__title">Добавление товара</h1>
    <Select />
    <!-- <Form />
    <Cards /> -->
  </div>
</template>

<script>
import Select from "@/components/Select.vue";
//import Form from "@/components/Form.vue";
//import Cards from "@/components/Cards.vue";
export default {
  //components: { Form, Cards },
  components: { Select },
  name: "App",
};
</script>

<style lang="scss" scoped>
#app {
  background: rgba(255, 254, 251, 0.8);
}

.products {
  color: $color-black;
  max-width: 1440px;
  min-width: 360px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 32px;

  &__title {
    margin: 0;
  }
}
</style>
