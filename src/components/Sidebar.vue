<template>
  <div>
    <div
      class="sidebar"
      data-color="purple"
      data-background-color="white"
      data-image="../assets/sidebar-1.jpg"
    >
      <div class="logo">
        <a class="simple-text logo-normal">SMK Maskumambang 1</a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li
            :class="[
              currentPage.includes('Dashboard') ? activeClass : '',
              'nav-item'
            ]"
          >
            <router-link :to="{ name: 'Dashboard' }" class="nav-link">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </router-link>
          </li>
          <li
            :class="[
              currentPage.includes('Guru') ? activeClass : '',
              'nav-item'
            ]"
          >
            <router-link :to="{ name: 'Guru' }" class="nav-link">
              <i class="material-icons">person</i>
              <p>Data Guru</p>
            </router-link>
          </li>
          <li
            :class="[
              currentPage.includes('Absensi') ? activeClass : '',
              'nav-item'
            ]"
          >
            <router-link :to="{ name: 'Absensi' }" class="nav-link">
              <i class="material-icons">content_paste</i>
              <p>Absensi Guru</p>
            </router-link>
          </li>
          <li
            :class="[
              currentPage.includes('Matapelajaran') ? activeClass : '',
              'nav-item'
            ]"
          >
            <router-link :to="{ name: 'Matapelajaran' }" class="nav-link">
              <i class="material-icons">library_books</i>
              <p>Mata Pelajaran</p>
            </router-link>
          </li>
          <li
            :class="[
              currentPage.includes('Jampelajaran') ? activeClass : '',
              'nav-item'
            ]"
          >
            <router-link :to="{ name: 'Jampelajaran' }" class="nav-link">
              <i class="material-icons">alarm</i>
              <p>Jam Pelajaran</p>
            </router-link>
          </li>
          <li
            :class="[
              currentPage.includes('Kelas') ? activeClass : '',
              'nav-item'
            ]"
          >
            <router-link :to="{ name: 'Kelas' }" class="nav-link">
              <i class="material-icons">school</i>
              <p>Kelas</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentPage() {
      return this.$route.name;
    }
  },
  data() {
    return {
      activeClass: "active"
    };
  }
};
</script>

<style>
</style>