<template>
  <div class="inputGroup">
    <div class="inputGroup__header flex flex-space-between flex-center">
      <div class="inputGroup__header__title">Select Recepients</div>
      <div
        class="inputGroup__fromContacts flex flex-center"
        @click="enablePhonebook"
      >
        <ContactsIcon class="inputGroup__fromContacts__icon" />
        Select from contacts
      </div>
    </div>
    <div
      v-for="(group, ind) in groups"
      v-bind:key="ind"
      class="inputGroup__section border-bottom"
    >
      <Input
        title="Name"
        :id="ind + '-name'"
        type="name"
        :value="group.name"
        @handleChange="handleChange($event)"
      />
      <Input
        title="Email"
        :id="ind + '-email'"
        type="email"
        :value="group.email"
        @handleChange="handleChange($event)"
      />
    </div>
    <div class="inputGroup__add" @click="addMore">
      + Add another person
    </div>
  </div>
</template>

<script>
import './InputGroup.scss';
import Input from '../Input';
import ContactsIcon from '../../assets/contacts.svg';
export default {
  name: 'InputGroup',
  props: { title: String },
  components: {
    Input,
    ContactsIcon,
  },
  data: () => ({
    groups: [{ name: '', email: '', valid: false }],
  }),
  methods: {
    addMore() {
      this.groups.push({
        name: '',
        email: '',
        emailValid: false,
        nameValid: false,
      });
      this.$emit('enableNext', true);
    },
    enablePhonebook() {
      this.$emit('enablePhonebook');
    },
    handleChange(payload) {
      const value = payload[0];
      const key = parseInt(payload[1].split('-')[0]);
      const type = payload[1].split('-')[1];
      const valid = payload[2];

      this.groups[key][type] = value;
      this.groups[key][`${type}Valid`] = valid;

      const everyThingValid = this.groups.every((grp) => {
        return grp.emailValid && grp.nameValid;
      });
      this.$emit('enableNext', !everyThingValid);
    },
  },
};
</script>
