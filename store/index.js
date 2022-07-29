import { createStore } from "vuex";
import vuexPersist from "vuex-persist";

export default createStore({
  state: {
    items: [
      {
        id: 1,
        link: require("@/assets/images/polaroid.jpg"),
        name: "Polaroid OneStep 2",
        desc: "Современный аналоговый моментальный фотоаппарат белого цвета, созданный по аналогу классических фотокамер мгновенной печати и сочетающий в себе классический квадратный кадр большого размера и дизайн, вдохновленный фотокамерами полароид прошлых поколений.",
        price: "13 990",
      },
      {
        id: 2,
        link: require("@/assets/images/c-eos-60d.jpg"),
        name: "Canon EOS 60D",
        desc: "Цифровой зеркальный фотоаппарат серии EOS компании Canon. Анонсирован в августе 2010 года и в сентябре поступил в продажу. Фотоаппарат располагается в линейке Canon EOS между моделями Canon EOS 550D (а также вышедшими ей на смену 600D и 650D) и Canon EOS 7D. Модель ориентирована на фотолюбителей-энтузиастов, стремящихся улучшить свои навыки и умения.",
        price: "56 700",
      },
      {
        id: 3,
        link: require("@/assets/images/c-ae-1.jpg"),
        name: "Canon AE-1",
        desc: "Mалоформатный однообъективный зеркальный фотоаппарат, выпускавшийся японской фирмой Canon с апреля 1976 года. В 1981 году базовую модель сменила усовершенствованная камера Canon AE-1 Program с программным автоматом экспозиции.",
        price: "15 000",
      },
      {
        id: 4,
        link: require("@/assets/images/k-a-s3.jpg"),
        name: "Konica Auto S3",
        desc: "Konica Auto S3 - это универсальная 35-мм дальномерная камера с приоритетом выдержки, выпускавшаяся с 1973 по 1977 год. S3 оснащен быстрым (f / 1.8) 38-миллиметровым шестиэлементным объективом, который зарекомендовал себя как средство получения чрезвычайно четких и детализированных изображений.",
        price: "10 999",
      },
      {
        id: 5,
        link: require("@/assets/images/c-g-3.jpg"),
        name: "Canon QL17 GIII",
        desc: "Камера со спаренным дальномером, со створчатыми ставнями, с фиксированным фокусным расстоянием 35 мм, впервые выпущенная компанией Canon в 1972 году. Она оснащена автоматической экспозицией с приоритетом выдержки и полностью ручными режимами съемки.",
        price: "13 000",
      },
      {
        id: 6,
        link: require("@/assets/images/polaroid-p-600.jpg"),
        name: "Polaroid Pronto 600",
        desc: "Редкая камера родом из 80-х. Одна из первых в серии Polaroid 600.",
        price: "4 990",
      },
      {
        id: 7,
        link: require("@/assets/images/leica-m-6.jpg"),
        name: "Leica M6",
        desc: "Mалоформатный дальномерный фотоаппарат с полуавтоматической установкой экспозиции немецкой компании Leica Camera, выпускавшийся с модификациями с 1984 по 1998 год. Шестая модель из семейства Leica M, разработан на основе фотоаппарата Leica M4.",
        price: "235 000",
      },
      {
        id: 8,
        link: require("@/assets/images/rolleiflex.jpg"),
        name: "Rolleiflex Xenotar 1:2.8/80",
        desc: "Rolleiflex 2.8С с объективом Schneider-Kreuznach Xenotar 80/2.8 Камера является одной из самых интересных в линейке Rolleiflex TLR. Выпуск пришелся на период с декабря 1952 по июнь 1955 и было выпущено порядка 30150 шт.",
        price: "130 000",
      },
      {
        id: 9,
        link: require("@/assets/images/pouva.jpg"),
        name: "Pouva Start",
        desc: "Среднеформатная бокс-камера, разработанная в Германии. Производилась фабрикой акционерного общества «Karl Pouva AG» в городе Фрайталь (ГДР) с 1951 по 1972 год. Простая камера ценой 16,5 марок ГДР, не требовавшая познаний в фототехнике, существенных материальных затрат и позволявшая получать бытовые фотографии приемлемого качества (в том числе, методом контактной печати без увеличителя), была доступна широкому кругу начинающих фотолюбителей.",
        price: "3 990",
      },
    ],
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
    },

    DELETE_CARD(state, id) {
      state.items = state.items.filter((item) => item.id != id);
    },
  },

  getters: {
    cards(state) {
      return state.items;
    },
  },

  plugins: [
    new vuexPersist({
      storage: window.localStorage,
    }).plugin,
  ],
});
