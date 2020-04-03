<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-warning card-header-icon">
              <div class="card-icon">
                <i class="material-icons">content_copy</i>
              </div>
              <p class="card-category">Data Guru</p>
              <h3 class="card-title">49</h3>
            </div>
            <div class="card-footer">
              <div class="stats">See detail</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-success card-header-icon">
              <div class="card-icon">
                <i class="material-icons">store</i>
              </div>
              <p class="card-category">Absensi Guru</p>
              <h3 class="card-title">245</h3>
            </div>
            <div class="card-footer">
              <div class="stats">See detail</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-danger card-header-icon">
              <div class="card-icon">
                <i class="material-icons">info_outline</i>
              </div>
              <p class="card-category">Mata Pelajaran</p>
              <h3 class="card-title">75</h3>
            </div>
            <div class="card-footer">
              <div class="stats">See detail</div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header card-header-tabs card-header-primary">
              <div class="nav-tabs-navigation">
                <div class="nav-tabs-wrapper">
                  <span class="nav-tabs-title" style="font-size: 20px;">
                    <b>Data Absensi Hari Ini</b>
                  </span>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="tab-content">
                <div class="tab-pane active" id="profile">
                  <div class="col-xs-12">
                    <div class="table-responsive">
                      <table class="table tabel-sortir m-b-sm">
                        <thead>
                          <tr>
                            <!-- <th data-type="html">Nama</th> -->
                            <th data-breakpoints="xs sm" class="text-center">Nama</th>
                            <th data-breakpoints="xs sm" class="text-center">NIP</th>
                            <th data-breakpoints="xs sm" class="text-center">Jenis Kelamin</th>
                            <th data-breakpoints="xs sm" class="text-center">Mata Pelajaran</th>
                            <th data-breakpoints="xs sm" class="text-center">Kelas</th>
                            <th data-breakpoints="xs sm" class="text-center">Kehadiran</th>
                            <th data-breakpoints="xs sm" class="text-center"></th>
                          </tr>
                        </thead>
                        <tbody id="table-list-items">
                          <tr>
                            <td>
                              <div class="media-body media-middle">Muhammdad Nuca</div>
                            </td>
                            <td class="text-center">19298937492842830</td>
                            <td class="text-center">L</td>
                            <td class="text-center">Hatimu</td>
                            <td class="text-center">12 TKJ A</td>
                            <td class="text-center">Hadir</td>
                            <td>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>

<style>
</style>