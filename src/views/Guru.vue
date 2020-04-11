<template>
  <BaseListWrapper
    list="Data Guru"
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
                      <th data-type="html">Nama</th>
                      <th data-breakpoints="xs sm" class="text-center">NIP</th>
                      <th data-breakpoints="xs sm" class="text-center">
                        Alamat
                      </th>
                      <th data-breakpoints="xs sm" class="text-center">
                        E-mail
                      </th>
                      <th data-breakpoints="xs sm" class="text-center">
                        Nomor HP
                      </th>
                      <th data-breakpoints="xs sm" class="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody
                    id="table-list-items"
                    v-for="teacher in teachers.data"
                    :key="teacher.id"
                    :teacher="teacher"
                  >
                    <tr>
                      <td>
                        <div class="media-body media-middle">
                          {{ teacher.nama }}
                        </div>
                      </td>
                      <td class="text-center">{{ teacher.nomer_pengajar }}</td>
                      <td class="text-center">{{ teacher.alamat }}</td>
                      <td class="text-center">{{ teacher.email }}</td>
                      <td class="text-center">{{ teacher.telp }}</td>
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
              <div class="col-md-6">
                <div class="form-group">
                  <label class="bmd-label-floating">Nama</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="bmd-label-floating">Email</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Alamat</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Password</label>
                  <input type="password" class="form-control" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="bmd-label-floating">Telp</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="bmd-label-floating">NIP</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
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
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      isCreateDialogDisplay: false
    };
  },
  created() {
    this.getTeachers();
  },
  computed: mapState("teacher", ["teachers"]),
  methods: mapActions("teacher", ["getTeachers"])
};
</script>

<style>
</style>