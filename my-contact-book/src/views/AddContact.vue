<template>
  <div>
    <h2>Add Contact</h2>
    <form @submit.prevent="addContact">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="phone" required />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
    };
  },
  methods: {
    addContact() {
      const newContact = { name: this.name, phone: this.phone };
      console.log('Contact added:', newContact); // Replace with logic to save contact
    },
  },
};
</script>
