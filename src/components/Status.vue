<template>
  <section class="status">
    <h2 class="title">Организация процессов без лишней бюрократии</h2>
    <p class="subtitle">
      Вашим менеджерам не придётся заниматься дополнительной работой и отвечать
      всем <br />
      клиентам, когда они получат свои посылки.
      <span>Информирование мы полностью берём на себя.</span> <br />Связываемся
      с вами только в случае необходимости, если клиент не выходит на связь
    </p>

    <div class="status-items">
      <div class="status-item" v-for="(item, index) in items" :key="index">
        <img class="status-item__image" :src="item.image" alt="handset" />
        <h3 class="status-item__title">{{ item.title }}</h3>
        <p class="status-item__desc">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StatusBlock",
  data() {
    return {
      items: [
        {
          image: require("../assets/images/si1.svg"),
          title: "Звоним заранее",
          desc: "Курьер всегда заранее звонит клиенту. Если ответа нет, с клиентом пытается связаться наш менеджер.",
        },
        {
          image: require("../assets/images/si2.svg"),
          title: "Сообщаем вам",
          desc: "Если и у менеджера не получилось дозвониться клиенту, мы обязательно сообщаем об этом вам.",
        },
        {
          image: require("../assets/images/si3.svg"),
          title: "Доставка без связи",
          desc: "Курьер может поехать на доставку несмотря на отсутствие связи с клиентом, если вы так решите.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.status {
  margin: 103px 0 0;
  //min-height: 478px;
  min-height: 526px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url("../assets/images/status-bg.svg");

  @media screen and (max-width: $laptop-big) {
    background-image: none;
  }

  @media screen and (max-width: $tablet) {
    margin: 35px 0 0;
  }

  .status-items {
    max-width: 1233px;
    padding: 0 30px;
    margin: 44px auto 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .status-item {
      padding: 53px 27px 43px;
      border: 2px solid $color-white;
      width: 370px;
      border-radius: 38px;

      @media screen and (max-width: $laptop-big) {
        width: 100%;
        margin: 0 0 18px;
      }

      &:last-child {
        @media screen and (max-width: $laptop-big) {
          margin: 0;
        }
      }

      &__image {
        display: block;
        margin: 0 auto;
      }

      &__title {
        margin: 30px 0 0;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
      }

      &__desc {
        margin: 24px 0 0;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
      }
    }
  }
}
</style>
