<template>
  <div>
    <h3>Contact List</h3>
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        <router-link :to="`/contact/${contact.id}`">{{ contact.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        { id: 1, name: 'John Doe', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', phone: '987-654-3210' },
      ],
    };
  },
};
</script>
