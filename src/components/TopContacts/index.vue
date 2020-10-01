<template>
  <div class="topcontacts border-bottom">
    <div class="topcontacts__title">{{ title }}</div>
    <div class="pt35 topcontacts__subtitle">
      Recents
    </div>
    <div class="topcontacts__contact hide-scroll">
      <div
        class="topcontacts__contact__wrapper"
        v-bind:key="contact.id"
        v-for="contact in contacts.slice(0, 10)"
      >
        <div
          class="topcontacts__contact__tile"
          :style="{ backgroundColor: randomColor(contact.id) }"
        >
          {{ contact.name[0].toUpperCase() }}
        </div>
        <div class="topcontacts__contact__name">
          {{ contact.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './TopContacts.scss';
import randomMC from 'random-material-color';
export default {
  name: 'TopContacts',
  props: {
    title: String,
    contacts: Array,
  },
  data: () => ({
    colorCache: {},
  }),
  methods: {
    randomColor(id) {
      return this.colorCache[id] || (this.colorCache[id] = randomMC.getColor());
    },
  },
};
</script>
