<template>
  <div>
    <header>
      <h1>Contact Book</h1>
    </header>
    <main>
      <nav>
        <a href="#/add-contact">Add Contact</a>
        <a href="#/">Contact List</a>
      </nav>
      <router-view />
    </main>
    <footer>
      &copy; 2024 Contact Book App
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style src="./style.css"></style>
