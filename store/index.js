import { createStore } from "vuex";
import vuexPersist from "vuex-persist";

export default createStore({
  state: {
    items: [
      {
        id: 1,
        link: require("@/assets/images/polaroid.jpg"),
        name: "Азбука",
        desc: "Довольно-таки интересное описание товара в несколько строк",
        price: "15 000",
      },
      {
        id: 2,
        link: require("@/assets/images/polaroid.jpg"),
        name: "Наименование товара",
        desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: "10 000",
      },
      {
        id: 3,
        link: require("@/assets/images/polaroid.jpg"),
        name: "Наименование товара",
        desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: "10 000",
      },
      {
        id: 4,
        link: require("@/assets/images/polaroid.jpg"),
        name: "Наименование товара",
        desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: "17 000",
      },
      {
        id: 5,
        link: require("@/assets/images/polaroid.jpg"),
        name: "Наименование товара",
        desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: "10 000",
      },
      {
        id: 6,
        link: require("@/assets/images/polaroid.jpg"),
        name: "Янтарь",
        desc: "Довольно-таки интересное",
        price: "12 000",
      },
    ],
    change: false,
  },
  actions: {
    addCard(context, card) {
      context.commit("ADD_CARD", card);
    },
    deleteCard(context, id) {
      context.commit("DELETE_CARD", id);
    },
  },
  mutations: {
    ADD_CARD(state, card) {
      state.items.unshift(card);
      state.change = true;
    },

    DELETE_CARD(state, id) {
      state.items = state.items.filter((item) => item.id != id);
      state.change = true;
    },
  },
  getters: {
    cards(state) {
      return state.items;
    },

    change(state) {
      return state.change;
    },
  },

  plugins: [
    new vuexPersist({
      storage: window.localStorage,
    }).plugin,
  ],
});
