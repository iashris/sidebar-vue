<template>
  <div class="sidebar full-height">
    <div
      class="sidebar__container full-height flex flex-column flex-space-between"
    >
      <div
        class="sidebar__block sidebar__header flex flex-space-between flex-center border-bottom"
      >
        <div v-if="!phonebookMode">{{ title }}</div>
        <div class="close-btn" v-if="!phonebookMode"><Close /></div>
        <div v-if="phonebookMode" class="sidebar__phoneTitle">
          <div @click="goBack()" class="sidebar__phoneTitle__icon">
            {{ `←` }}
          </div>
          <div>Select Contact</div>
        </div>
      </div>
      <Phonebook
        v-bind:title="topContactsTitle"
        v-bind:contacts="contacts"
        v-if="phonebookMode"
      />
      <div
        class="sidebar__block sidebar__content hide-scroll"
        v-if="!phonebookMode"
      >
        <TopContacts
          v-bind:title="topContactsTitle"
          v-bind:contacts="contacts"
        />
        <InputGroup
          @enablePhonebook="enablePhonebook"
          @enableNext="setButtonState"
        />
      </div>
      <div
        v-if="!phonebookMode"
        class="sidebar__block sidebar__footer flex flex-space-between flex-center"
      >
        <div>Cancel</div>
        <div class="close-btn">
          <Button :disabled="buttonDisabled" title="Next" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './Sidebar.scss';
import Close from '../../assets/close.svg';
import TopContacts from '../TopContacts';
import InputGroup from '../InputGroup';
import Button from '../Button';
import Phonebook from '../Phonebook';
export default {
  name: 'Sidebar',
  props: {
    title: String,
    topContactsTitle: String,
    contacts: Array,
  },
  components: {
    Close,
    TopContacts,
    Button,
    InputGroup,
    Phonebook,
  },
  data: () => ({
    phonebookMode: false,
    buttonDisabled: true,
  }),
  methods: {
    enablePhonebook() {
      this.phonebookMode = true;
    },
    goBack() {
      this.phonebookMode = false;
    },
    setButtonState(st) {
      this.buttonDisabled = st;
    },
  },
};
</script>
