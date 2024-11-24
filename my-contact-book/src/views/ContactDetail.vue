<template>
  <div>
    <h2>Contact Details</h2>
    <p><strong>ID:</strong> {{ id }}</p>
    <!-- Add more details as needed -->
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    return { id: route.params.id };
  },
};
</script>
