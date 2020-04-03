<template>
  <BaseListWrapper list="Data Guru">
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
                  <tbody id="table-list-items">
                    <tr>
                      <td>
                        <div class="media-body media-middle">
                          Muhammdad ALi
                        </div>
                      </td>
                      <td class="text-center">19298937492842830</td>
                      <td class="text-center">Surabaya</td>
                      <td class="text-center">apaya@gmail.com</td>
                      <td class="text-center">234567890297</td>
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
  </BaseListWrapper>
</template>

<script>
export default {};
</script>

<style>
</style>