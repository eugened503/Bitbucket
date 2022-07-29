<template>
  <transition name="modal">
    <div class="modal-mask" v-if="showModal">
      <div class="modal">
        <div class="modal__header">
          <slot name="header"> default header </slot>
        </div>
        <div class="modal__body">
          <slot name="body"> default body </slot>
        </div>
        <button class="modal__button" @click="$emit('close')">OK</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalBlock",
  props: {
    showModal: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  width: 300px;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);

  &__header {
    font-size: 20px;
    line-height: 25px;
  }

  &__body {
    margin: 20px 0;
    line-height: 20px;
  }

  &__button {
    width: 100%;
    margin: 24px 0 0;
    padding: 10px 92px 11px 96px;
    background: $color-green;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: $color-white;
    transition: background 0.3s ease-in;

    &:hover {
      background: #54ac46;
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
