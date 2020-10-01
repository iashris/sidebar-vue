<template>
  <div class="phonebook">
    <div class="phonebook__menu">
      <div
        v-for="char in formatted"
        v-bind:key="char.character"
        class="phonebook__menu__element"
        @click="scrollTo(char.character)"
      >
        {{ char.character }}
      </div>
    </div>
    <div
      v-for="char in formatted"
      v-bind:key="char.character"
      :ref="char.character"
      class="phonebook__section"
    >
      <div class="phonebook__letter">{{ char.character }}</div>
      <div
        v-for="person in char.records"
        v-bind:key="person.id"
        class="phonebook__letter__block border-bottom"
      >
        <div class="phonebook__name">{{ person.name }}</div>
        <div class="phonebook__email">{{ person.email }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { dictionarize } from '../../utils';
import './Phonebook.scss';
export default {
  name: 'Phonebook',
  props: { title: String, contacts: Array },
  components: {},
  data() {
    return {
      formatted: Object.assign([], dictionarize(this.contacts)),
    };
  },
  methods: {
    scrollTo(refName) {
      this.$refs[refName][0].scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>
