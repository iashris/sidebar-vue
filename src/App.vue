<template>
  <div id="app">
    <Sidebar
      title="Create an Invoice"
      topContactsTitle="Who are you sending this invoice to?"
      v-bind:contacts="contacts"
    />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import { randomContact } from './utils';
const contacts = new Array(50).fill(0).map((v, i) => randomContact(i));
export default {
  name: 'App',
  components: {
    Sidebar,
  },
  data: () => ({
    contacts,
  }),
};
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
