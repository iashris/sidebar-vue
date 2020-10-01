<template>
  <div class="input">
    <div>{{ title }}</div>
    <input class="input__box" :value="value" @input="handleChange" />
    <div class="input__error" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { validateEmail } from '../../utils';
import './Input.scss';
export default {
  name: 'Input',
  props: { title: String, type: String, id: String, value: String },
  components: {},
  data() {
    return {
      val: this.value,
      error: '',
    };
  },
  methods: {
    handleChange(e) {
      const value = e.target.value;
      this.val = value;
      let isValid = false;
      if (this.id.includes('email')) {
        isValid = validateEmail(value);
        this.error = isValid ? '' : 'Hey! Please fix the email.';
      } else {
        isValid = value.trim().length > 0;
        this.error = isValid ? '' : 'Please enter the name';
      }

      this.$emit('handleChange', [value, this.id, isValid]);
    },
  },
};
</script>
