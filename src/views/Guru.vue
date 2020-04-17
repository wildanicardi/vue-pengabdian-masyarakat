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
                      <th data-breakpoints="xs sm" class="text-center">
                        Gambar
                      </th>
                      <th data-breakpoints="xs sm" class="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody
                    id="table-list-items"
                    v-for="teacher in teachers"
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
                        <v-card>
                          <v-img
                            :src="teacher.gambar"
                            aspect-ratio="1"
                            class="grey lighten-2"
                          >
                          </v-img>
                        </v-card>
                      </td>
                      <td class="text-center">
                        <v-btn
                          class="mr-2"
                          @click="
                            isUpdateDialogDisplay = !isUpdateDialogDisplay
                          "
                        >
                          <i class="fa fa-pencil-square-o" aria-hidden="true">
                          </i>
                        </v-btn>
                        <v-btn>
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </v-btn>
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
      <!--  dialog tambah data -->
      <BaseDialog :show-dialog="isCreateDialogDisplay">
        <template #form>
          <form>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Nama</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="teacher.nama"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="teacher.email"
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
                    class="form-control"
                    v-model="teacher.password"
                  />
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
                @click="storeTeacher"
                style="background-color:#2C4F81; margin-bottom: -20px;"
              >
                Tambah Data
              </button>
            </div>
          </form>
        </template>
      </BaseDialog>
      <!--  dialog lengkapi data -->
      <BaseDialog :show-dialog="isUpdateDialogDisplay">
        <template #form>
          <form>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Telp</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="teacher.telp"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">NIP</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="teacher.nomer_pengajar"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Alamat</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="teacher.alamat"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Gambar</label>
                  <v-file-input
                    filled=""
                    label="Pilih Gambar"
                    accept="image/*"
                    show-size
                    clearable=""
                    dense=""
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                @click="isUpdateDialogDisplay = false"
                style="background-color:red; margin-bottom: -20px;"
              >
                Batal
              </button>
              <button
                type="button"
                class="btn btn-default"
                @click="storeTeacher"
                style="background-color:#2C4F81; margin-bottom: -20px;"
              >
                Lengkapi Data
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
      isCreateDialogDisplay: false,
      isUpdateDialogDisplay: false,
      teacher: {
        nama: null,
        email: null,
        password: null,
        role_id: 2
      }
    };
  },
  created() {
    this.getTeachers();
  },
  computed: mapState("teacher", ["teachers"]),
  methods: {
    ...mapActions("teacher", ["getTeachers", "createUserData"]),
    async storeTeacher() {
      try {
        this.isCreateDialogDisplay = true;
        await this.createUserData(this.teacher);
        this.isCreateDialogDisplay = false;
      } catch (error) {
        console.log(error);
      }
    },
    freshObject() {
      return {
        nama: "",
        alamat: "",
        email: "",
        telp: "",
        password: "",
        nomer_pengajar: ""
      };
    }
  }
};
</script>

<style>
</style>