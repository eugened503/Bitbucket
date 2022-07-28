<template>
  <div class="select-wrapper">
    <select
      class="select"
      name="sortBy"
      @change="sortedList(sortType)"
      v-model="sortType"
    >
      <option
        class="select__option"
        v-for="(item, index) in sortOptions"
        :key="index"
        :value="item.value"
      >
        {{ item.text }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SelectBlock",
  data() {
    return {
      sortParam: "",
      sortType: "default",
      sortOptions: [
        { text: "По умолчанию", value: "default" },
        { text: "По цене min", value: "priceMin" },
        { text: "По цене max", value: "priceMax" },
        { text: "По имени А-Я", value: "nameMin" },
        { text: "По имени Я-А", value: "nameMax" },
      ],
      cloneItems: [],
    };
  },

  mounted() {
    this.cloneItems = this.$store.state.items.slice();
  },

  computed: {
    ...mapGetters(["change"]),
  },

  methods: {
    sortedList(sortParam) {
      switch (sortParam) {
        case "priceMin":
          return this.$store.state.items.sort(this.sortByPriceMin);
        case "priceMax":
          return this.$store.state.items.sort(this.sortByPriceMax);
        case "nameMin":
          return this.$store.state.items.sort(this.sortByNameMin);
        case "nameMax":
          return this.$store.state.items.sort(this.sortByNameMax);
        case "default":
          return this.sortDefault();
        default:
          return this.$store.state.items;
      }
    },

    sortByPriceMin(a, b) {
      return Number(a.price.replace(/\s+/g, "")) >
        Number(b.price.replace(/\s+/g, ""))
        ? 1
        : -1;
    },

    sortByPriceMax(a, b) {
      return Number(a.price.replace(/\s+/g, "")) <
        Number(b.price.replace(/\s+/g, ""))
        ? 1
        : -1;
    },

    sortByNameMin(a, b) {
      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    },

    sortByNameMax(a, b) {
      return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
    },

    sortByIdMin(a, b) {
      return a.id > b.id ? 1 : -1;
    },

    sortDefault() {
      let storageItems = JSON.parse(localStorage.getItem("vuex"))?.items;
      let res = this.change
        ? storageItems
        : this.cloneItems.sort(this.sortByIdMin);
      return (this.$store.state.items = res);
    },
  },
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 45%;
    right: 16px;
    width: 8px;
    height: 6px;
    background: url(../assets/images/arrow.svg) no-repeat center center;
    pointer-events: none;
  }

  .select {
    display: block;
    max-width: 121.49px;
    padding: 10px 27.49px 11px 16px;
    border: none;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 12px;
    line-height: 15px;
    color: #b4b4b4;
    appearance: none;
    cursor: pointer;

    &__option {
      font-size: 12px;
      line-height: 15px;
      color: #b4b4b4;
    }
  }
}
</style>
