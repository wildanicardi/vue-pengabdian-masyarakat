<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top"
    >
      <div class="container-fluid">
        <div class="navbar-wrapper">
          <a class="navbar-brand" href="javascript:;">{{ name }}</a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon icon-bar"></span>
          <span class="navbar-toggler-icon icon-bar"></span>
          <span class="navbar-toggler-icon icon-bar"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav">
            <a
              class="nav-link float-left"
              href="javascript:;"
              id="navbarDropdownProfile"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="material-icons">person</i>
            </a>
            <button
              type="submit"
              class="btn pull-right"
              style="background-color: rgb(226, 110, 110);"
            >
              <span class="material-icons">
                power_settings_new
              </span>
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style></style>
