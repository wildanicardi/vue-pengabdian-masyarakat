<template>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-content class="modal-content">
      <md-dialog-title class="modal-title" style="margin-top:0px"
        >Tambah Data</md-dialog-title
      >
      <div>
        <slot name="form" />
      </div>
    </md-dialog-content>
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