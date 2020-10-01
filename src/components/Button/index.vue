<template>
  <div
    v-bind:class="{
      button: true,
      'button--primary': !disabled,
      'button--disabled': disabled,
    }"
  >
    {{ title }}
  </div>
</template>

<script>
import './Button.scss';
export default {
  name: 'Button',
  props: { title: String, disabled: Boolean },
  components: {},
};
</script>
