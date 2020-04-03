<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header card-header-primary">
              <h4 class="card-title">Edit Akun</h4>
            </div>
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="bmd-label-floating">Nama Sekolah</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="bmd-label-floating">Kepala Sekolah</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="bmd-label-floating">Alamat E-mail</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="bmd-label-floating">No. Telepon</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="bmd-label-floating">Password</label>
                      <input type="password" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="bmd-label-floating">Alamat Sekolah</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="bmd-label-floating">Kota</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="bmd-label-floating">Kode Pos</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <br />
                <button type="submit" class="btn btn-primary pull-right">Perbarui Data Akun</button>
                <div class="clearfix"></div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-profile">
            <div class="card-body">
              <h4 class="card-title">
                <b>SDN Maskumambang 1</b>
              </h4>
              <hr />
              <div class="col-md-12">
                <table class="table">
                  <tbody>
                    <tr>
                      <td width="30px">
                        <i class="fa fa-user" aria-hidden="true"></i>
                      </td>
                      <td>Nama Kepala Sekolah</td>
                    </tr>
                    <tr>
                      <td width="30px">
                        <i class="fa fa-building" aria-hidden="true"></i>
                      </td>
                      <td>Ini nanti isinya alamat</td>
                    </tr>
                    <tr>
                      <td width="30px">
                        <i class="fa fa-phone fa-fw"></i>
                      </td>
                      <td>Telpon Sekolah</td>
                    </tr>
                    <tr>
                      <td width="30px">
                        <i class="fa fa-envelope-o fa-fw"></i>
                      </td>
                      <td>email sekolah nanti</td>
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
</template>

<script>
export default {};
</script>

<style>
</style>