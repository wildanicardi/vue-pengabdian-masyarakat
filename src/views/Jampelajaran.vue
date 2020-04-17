<template>
  <BaseListWrapper
    list="Jam Pelajaran"
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
                      <th>
                        Hari
                      </th>
                      <th data-breakpoints="xs sm" class="text-center">
                        Mulai Jam Pelajaran
                      </th>
                      <th data-breakpoints="xs sm" class="text-center">
                        Selesai Jam Pelajaran
                      </th>
                      <th data-breakpoints="xs sm" class="text-center">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    id="table-list-items"
                    v-for="time in times"
                    :key="time.id"
                    :time="time"
                  >
                    <tr>
                      <td>
                        <div class="media-body media-middle">
                          {{ time.hari }}
                        </div>
                      </td>
                      <td class="text-center">{{ time.mulai }}</td>
                      <td class="text-center">{{ time.selesai }}</td>
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
                  <label class="bmd-label-floating">Hari</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="data.hari"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Mulai</label>
                  <v-time-picker
                    v-model="data.mulai"
                    :allowed-minutes="allowedMinutes"
                    :use-seconds="true"
                    class="mt-4 time"
                    format="24hr"
                  ></v-time-picker>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <label class="bmd-label-floating">Selesai</label>
                <v-time-picker
                  v-model="data.selesai"
                  :allowed-minutes="allowedMinutes"
                  :use-seconds="useSeconds"
                  class="mt-4 time"
                  format="24hr"
                ></v-time-picker>
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
                @click="storePelajaran"
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
      useSeconds: true,
      timeStep: "10:10",
      data: {
        hari: null,
        mulai: null,
        selesai: null
      }
    };
  },
  created() {
    this.getTimes();
  },
  computed: mapState("time", ["times"]),
  methods: {
    ...mapActions("time", ["getTimes", "createTimes"]),
    allowedHours: v => v % 2,
    allowedMinutes: v => v >= 0 && v <= 60,
    allowedStep: m => m % 10 === 0,
    async storePelajaran() {
      try {
        this.isCreateDialogDisplay = true;
        NProgress.start();
        await this.createTimes(this.data);
        this.isCreateDialogDisplay = false;
        NProgress.done();
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.time {
  background-color: #2545c0;
}
</style>