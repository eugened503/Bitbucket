<template>
  <div class="select-wrapper">
    <select class="select">
      <option class="select__option">По умолчанию</option>
      <option class="select__option">По цене min</option>
      <option class="select__option">По цене max</option>
      <option class="select__option">По имени</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectBlock",
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    //right: 16px;
    top: 45%;
    right: 16px;
    //transform: translate(50%, -50%);
    //margin-top: -8px;
    //display: block;
    width: 8px;
    height: 6px;
    background: url(../assets/images/arrow.svg) no-repeat center center;
    pointer-events: none;
  }

  .select {
    display: block;
    max-width: 121.49px;
    padding: 10px 27.49px 11px 16px;
    //height: 36px;
    border: none;
    //border: 1px solid #b4b4b4;
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
      //width: 78px;
    }
  }
}
</style>
