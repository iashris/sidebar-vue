<template>
  <div class="phonebook">
    <div class="phonebook__menu">
      <div
        v-for="char in filterResults(formatted)"
        v-bind:key="char.character"
        class="phonebook__menu__element"
        @click="scrollTo(char.character)"
      >
        {{ char.character }}
      </div>
    </div>
    <div class="phonebook__search">
      <div class="phonebook__search__icon-container">
        <Search class="phonebook__search__icon" />
      </div>
      <div class="phonebook__search__input-container">
        <input class="phonebook__search__input" @input="registerQuery" />
      </div>
    </div>
    <div
      v-for="char in filterResults(formatted)"
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
import Search from '../../assets/search.svg';
export default {
  name: 'Phonebook',
  props: { title: String, contacts: Array },
  components: { Search },
  data() {
    return {
      formatted: Object.assign([], this.contacts),
      query: '',
    };
  },
  methods: {
    scrollTo(refName) {
      this.$refs[refName][0].scrollIntoView({ behavior: 'smooth' });
    },
    registerQuery(e) {
      const query = e.target.value;
      this.query = query;
    },
    filterResults() {
      if (!this.query) return dictionarize(this.formatted);
      return dictionarize(
        this.formatted.filter(
          (rec) =>
            rec.email.includes(this.query.toLowerCase()) ||
            rec.name.toLowerCase().includes(this.query.toLowerCase())
        )
      );
    },
  },
};
</script>
