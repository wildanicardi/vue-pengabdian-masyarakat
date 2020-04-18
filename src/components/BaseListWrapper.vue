<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header card-header-tabs card-header-primary">
              <div class="nav-tabs-navigation">
                <div class="nav-tabs-wrapper">
                  <span class="nav-tabs-title" style="font-size: 20px;">
                    <b>{{ list }}</b>
                  </span>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary pull-right"
                  @click="$emit('action')"
                  style="background-color: rgb(226, 110, 110);"
                >
                  Tambah Data
                </button>
              </div>
            </div>
            <slot name="table" />
            <slot name="modal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: String
  }
};
</script>

<style></style>
