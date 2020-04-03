<template>
  <BaseListWrapper list="Absensi">
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
                        Status
                      </th>
                      <th data-breakpoints="xs sm" class="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody id="table-list-items">
                    <tr>
                      <td>
                        <div class="media-body media-middle">
                          Muhammdad Ali
                        </div>
                      </td>
                      <td class="text-center">IPA</td>
                      <td class="text-center">Hadir</td>
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