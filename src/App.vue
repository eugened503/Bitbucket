<template>
  <Form />
  <Cards />
</template>
<script>
import Form from "@/components/Form.vue";
import Cards from "@/components/Cards.vue";
export default {
  components: { Form, Cards },
  name: "App",
};
</script>

<style lang="scss" scoped>
#app {
  //background: $color-purple;
}

.main {
  // background: $color-purple;
  // color: $color-white;
  // max-width: 1920px;
  // min-width: 360px;
  // min-height: 100vh;
  // margin: 0 auto;
}
</style>
