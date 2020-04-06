<template>
  <div class="content">
    <div class="container-fluid">
      <div class="card">
        <div class="card-header card-header-tabs card-header-primary">
          <span>Form Login</span>
        </div>
        <div class="card-body">
          <v-form ref="form" @submit="onLogin" v-model="valid">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Email</label>
                  <input
                    type="text"
                    v-model="login.email"
                    class="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Password</label>
                  <input
                    type="password"
                    v-model="login.password"
                    class="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                :disabled="!valid"
                @click="onLogin"
                class="btn btn-primary"
              >
                Login
              </button>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      valid: true,
      login: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    ...mapActions({
      logIn: "auth/logIn"
    }),
    async onLogin() {
      if (this.$refs.form.validate()) {
        try {
          const response = await this.logIn(this.login);
          console.log(response);
          if (!response.data.success) {
            console.log(response.data.message);
          } else {
            this.$router.push({ name: "Dashboard" });
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
};
</script>

<style scoped>
.container-fluid {
  width: 56%;
}
</style>
