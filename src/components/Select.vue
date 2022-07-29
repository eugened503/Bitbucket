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
    };
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
          return this.$store.state.items.sort(() => Math.random() - 0.5);
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
    top: 15px;
    right: 15px;
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
    background: $main-bg-color;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 12px;
    line-height: 15px;
    color: $color-gray;
    appearance: none;
    cursor: pointer;

    &__option {
      font-size: 12px;
      line-height: 15px;
      color: $color-gray;
    }
  }
}
</style>
