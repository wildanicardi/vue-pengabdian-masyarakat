<template>
  <BaseListWrapper
    list="Mata Pelajaran"
    @action="isCreateDialogDisplay = !isCreateDialogDisplay"
  >
    <template #table>
      <div class="card-body">
        <div class="tab-content">
          <div class="tab-pane active" id="profile">
            <div class="col-xs-12">
              <div class="table-responsive">
                <table class="table tabel-sortir m-b-sm">
                  <thead>
                    <tr>
                      <th data-type="html">Mata Pelajaran</th>
                      <th data-breakpoints="xs sm" class="text-center">
                        Jam Pelajaran
                      </th>
                      <th data-breakpoints="xs sm" class="text-center">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody id="table-list-items">
                    <tr>
                      <td>
                        <div class="media-body media-middle">
                          IPA
                        </div>
                      </td>
                      <td class="text-center">06:00 - 08:00</td>
                      <td class="text-center">
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #modal>
      <BaseDialog :show-dialog="isCreateDialogDisplay">
        <template #form>
          <form>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Mata Pelajaran</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <select class="form-control" id="sel1">
                    <option>Pilih Jam Pelajaran :</option>
                    <option>Laki-Laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer" style="margin-top: 20px;">
              <button
                type="button"
                class="btn btn-default"
                @click="isCreateDialogDisplay = false"
                style="background-color:red; margin-bottom: -20px;"
              >
                Batal
              </button>
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                style="background-color:#2C4F81; margin-bottom: -20px;"
              >
                Tambah Data
              </button>
            </div>
          </form>
        </template>
      </BaseDialog>
    </template>
  </BaseListWrapper>
</template>

<script>
export default {
  data() {
    return {
      isCreateDialogDisplay: false
    };
  }
};
</script>

<style>
</style>