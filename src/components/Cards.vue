<template>
  <div class="cards">
    <article class="card" v-for="(item, index) in items" :key="index">
      <button class="card__button">
        <img src="../assets/images/delete.svg" alt="" />
      </button>
      <img class="card__image" :src="item.image" alt="" />
      <div class="card__info">
        <h3 class="card__title">{{ item.title }}</h3>
        <p class="card__desc">{{ item.desc }}</p>
        <p class="card__price">{{ filtered(item.price) }} руб.</p>
      </div>
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
          title:
            "Наименование товара интересное описание товара в несколько строк",
          desc: "Довольно-таки интересное описание товара в несколько строк",
          price: "5000",
        },
        {
          image: require("../assets/images/polaroid.jpg"),
          title: "Наименование товара",
          desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "10000",
        },
        {
          image: require("../assets/images/polaroid.jpg"),
          title: "Наименование товара",
          desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "10000",
        },
        {
          image: require("../assets/images/polaroid.jpg"),
          title: "Наименование товара",
          desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "1000",
        },
        {
          image: require("../assets/images/polaroid.jpg"),
          title: "Наименование товара",
          desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "10 000",
        },
        {
          image: require("../assets/images/polaroid.jpg"),
          title: "Наименование товара",
          desc: "Довольно-таки интересное",
          price: "1 0000 000000000000000",
        },
        {
          image: require("../assets/images/polaroid.jpg"),
          title: "Наименование товара",
          desc: "Довольно-таки интересное",
          price: "15000",
        },
      ],
    };
  },

  methods: {
    filtered(price) {
      return Number(price.replace(/\s+/g, "")).toLocaleString("ru-RU");
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  width: percentage(1028/1376);
  //margin: 0 0 0 percentage(16/1376);
  margin: 0 0 0 16px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: $tablet - 1px) {
    display: block;
    width: 100%;
    margin: 16px 0 0;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 0 16px;
    width: percentage(332/1028);
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    cursor: pointer;

    &:hover .card__button {
      display: flex;
    }

    @media screen and (max-width: $laptop-small - 1px) {
      width: calc(50% - 8px);
    }

    @media screen and (max-width: $tablet - 1px) {
      width: 100%;
    }

    &__button {
      position: absolute;
      display: none;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      top: -8px;
      right: -8px;
      background: $color-carrot;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      transition: background 0.3s ease-in;

      &:hover {
        background: #fa5050;
      }
    }

    &__image {
      //display: block;
      //min-height: 200px;
      //height: auto;
      //width: 100%;
      //object-fit: cover;
    }

    &__info {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 0 16px 24px;
      //min-height: 207px;
    }

    &__title {
      margin: 16px 0 0;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: #3f3f3f;
      word-wrap: break-word;
    }

    &__desc {
      display: -webkit-box;
      margin: 16px 0 32px;
      font-size: 16px;
      line-height: 20px;
      color: #3f3f3f;
      overflow: hidden;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;

      @media screen and (max-width: 1089px) {
        -webkit-line-clamp: 3;
      }

      @media screen and (max-width: $laptop-small - 1px) {
        -webkit-line-clamp: 2;
        //min-height: 40px;
      }
    }

    &__price {
      margin: auto 0 0;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      color: #3f3f3f;
      word-wrap: break-word;
    }
  }
}
</style>
