<template>
  <div>
    <h2>Home</h2>
    <router-link to="/add-contact">Add Contact</router-link>
    <ContactList />
  </div>
</template>

<script>
import ContactList from '../components/ContactList.vue';

export default {
  components: { ContactList },
};
</script>
