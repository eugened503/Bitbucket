<template>
  <div class="cards">
    <article class="card" v-for="(item, index) in items" :key="index">
      <button class="card__button">
        <img
          class="card__button-image"
          src="../assets/images/delete.svg"
          alt=""
        />
      </button>
      <img class="card__image" :src="item.image" alt="" />
      <h3 class="card__title">{{ item.title }}</h3>
      <p class="card__desc">{{ item.desc }}</p>
      <p class="card__price">{{ item.price }}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: "CardsBlock",
  data() {
    return {
      items: [
        {
          image: require("../assets/images/polaroid.jpg"),
          title: "Наименование товара",
          desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "10 000 руб.",
        },
        {
          image: require("../assets/images/polaroid.jpg"),
          title: "Наименование товара",
          desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "10 000 руб.",
        },
        {
          image: require("../assets/images/polaroid.jpg"),
          title: "Наименование товара",
          desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "10 000 руб.",
        },
        {
          image: require("../assets/images/polaroid.jpg"),
          title: "Наименование товара",
          desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "10 000 руб.",
        },
        {
          image: require("../assets/images/polaroid.jpg"),
          title: "Наименование товара",
          desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "10 000 руб.",
        },
        {
          image: require("../assets/images/polaroid.jpg"),
          title: "Наименование товара",
          desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "10 000 руб.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.cards {
}
</style>
