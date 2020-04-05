<template>
  <div class="content">
    <div class="container-fluid">
      <div class="card">
        <div class="card-header card-header-tabs card-header-primary">
          <span>Form Login</span>
        </div>
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Email</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Password</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  width: 56%;
}
</style>
