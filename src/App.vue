<template>
  <v-app>
    <div>
    <Sidebar v-if="this.$route.name !== 'Login'" />
    <div class="main-panel">
      <Navbar v-if="this.$route.name !== 'Login'" />
      <router-view />
    </div>
    </div>
  </v-app>
</template>
<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default {
  components: {
    Navbar,
    Sidebar
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
