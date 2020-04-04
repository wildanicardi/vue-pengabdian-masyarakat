<template>
  <md-dialog class="modal-dialog" :md-active.sync="showDialog">
    <md-tab class="modal-content">
      <md-dialog-title class="modal-title" style="margin-top:0px"
        >Tambah Data</md-dialog-title
      >
      <div class="card-body">
        <slot name="form" />
      </div>
    </md-tab>
  </md-dialog>
</template>

<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
</style>