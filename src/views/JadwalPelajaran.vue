<template>
  <BaseListWrapper
    list="Jadwal Pelajaran"
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
                      <th data-type="html">Nama Guru</th>
                      <th data-breakpoints="xs sm" class="text-center">
                        Mata Pelajaran
                      </th>
                      <th data-breakpoints="xs sm" class="text-center">
                        Kelas
                      </th>
                      <th data-breakpoints="xs sm" class="text-center">
                        Hari
                      </th>
                      <th data-breakpoints="xs sm" class="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody
                    id="table-list-items"
                    v-for="schedule in schedules"
                    :key="schedule"
                    :schedule="schedule"
                  >
                    <tr>
                      <td>
                        <div class="media-body media-middle">
                          {{ schedule.nama }}
                        </div>
                      </td>
                      <td class="text-center">{{ schedule.nama_pelajaran }}</td>
                      <td class="text-center">
                        {{ schedule.tingkatan_kelas }}-{{ schedule.jurusan }}
                      </td>
                      <td class="text-center">{{ schedule.hari }}</td>
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
                <v-autocomplete
                  :items="lessons"
                  item-text="nama_pelajaran"
                  filled
                  dense
                  v-model="data.mata_pelajaran_id"
                  label="Mata Pelajaran"
                  item-value="id"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <v-autocomplete
                  :items="teachers"
                  item-text="nama"
                  filled
                  dense
                  v-model="data.Guru_id"
                  label="Nama Guru"
                  item-value="id"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <v-autocomplete
                  :items="classes"
                  item-text="jurusan"
                  filled
                  dense
                  v-model="data.kelas_id"
                  label="Kelas"
                  item-value="id"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <v-autocomplete
                  :items="times"
                  item-text="hari"
                  filled
                  dense
                  v-model="data.jam_pelajaran_id"
                  label="Hari Pelajaran"
                  item-value="id"
                />
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
                @click="storeJadwal"
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
        Guru_id: null,
        mata_pelajaran_id: null,
        jam_pelajaran_id: null,
        kelas_id: null
      }
    };
  },
  async created() {
    await Promise.all([
      this.getSchedule(),
      this.getTeachers(),
      this.getClass(),
      this.getTimes(),
      this.getLessons()
    ]);
    // this.getSchedule();
    // this.getTeachers();
  },
  computed: {
    ...mapState({
      schedules: state => state.schedule.schedules,
      classes: state => state.classes.classes,
      times: state => state.time.times,
      teachers: state => state.teacher.teachers,
      lessons: state => state.lessons.lessons
    })
  },
  methods: {
    ...mapActions({
      getSchedule: "schedule/getSchedule",
      createSchedule: "schedule/createSchedule",
      getTeachers: "teacher/getTeachers",
      getClass: "classes/getClass",
      getTimes: "time/getTimes",
      getLessons: "lessons/getLessons"
    }),
    async storeJadwal() {
      try {
        this.isCreateDialogDisplay = true;
        NProgress.start();
        console.log(this.data);
        await this.createSchedule(this.data);
        this.isCreateDialogDisplay = false;
        NProgress.done();
      } catch (error) {
        console.log(error.message);
      }
    }
  }
};
</script>

<style>
</style>