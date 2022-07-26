<template>
  <select class="select">
    <option>По умолчанию</option>
    <option>По цене min (от меньшего к большему)</option>
    <option>По цене max (от большего к меньшему)</option>
    <option>По наименованию</option>
  </select>
</template>

<script>
export default {
  name: "SelectBlock",
};
</script>

<style lang="scss" scoped>
.select {
}
</style>
