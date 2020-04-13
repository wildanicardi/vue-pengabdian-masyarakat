<template>
  <BaseListWrapper
    list="Kelas"
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
                      <th data-type="html">Jurusan</th>
                      <th data-breakpoints="xs sm" class="text-center">
                        Kelas
                      </th>
                      <th data-breakpoints="xs sm" class="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody
                    id="table-list-items"
                    v-for="item in classes"
                    :key="item.id"
                    :item="item"
                  >
                    <tr>
                      <td>
                        <div class="media-body media-middle">
                          {{ item.jurusan }}
                        </div>
                      </td>
                      <td class="text-center">{{ item.tingkatan_kelas }}</td>
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
                  <label class="bmd-label-floating">Jurusan</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="data.jurusan"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Kelas</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="data.tingkatan_kelas"
                    required
                  />
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
                @click="storeClasses"
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
import NProgress from "nprogress";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      isCreateDialogDisplay: false,
      data: {
        jurusan: null,
        tingkatan_kelas: null
      }
    };
  },
  created() {
    this.getClass();
  },
  computed: mapState("classes", ["classes"]),
  methods: {
    ...mapActions("classes", ["getClass", "creatClass"]),
    async storeClasses() {
      try {
        this.isCreateDialogDisplay = true;
        NProgress.start();
        await this.creatClass(this.data);
        this.isCreateDialogDisplay = false;
      } catch (error) {
        NProgress.done();
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
