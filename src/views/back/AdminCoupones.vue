
<template>
  <div>
    <loading :active.sync="isLoading" />
    <div class="text-right mt-4">
      <button
        class="btn btn-primary"
        @click="openModal(true)"
      >
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-5 mb-6 table-responsive-lg">
      <thead>
        <th>名稱</th>
        <th class="text-nowrap">
          折扣百分比
        </th>
        <th>到期日</th>
        <th
          width="150"
          class="text-nowrap"
        >
          是否啟用
        </th>
        <th width="150">
          編輯
        </th>
      </thead>
      <tbody>
        <tr
          v-for="item in SortCoupons"
          :key="item.id"
        >
          <td class="text-nowrap">
            {{ item.title }}
          </td>
          <td class="text-nowrap">
            {{ item.percent }}
          </td>
          <td class="text-nowrap">
            <span :class="{ 'overdue mr-2': currentTime > item.due_date }">{{ item.due_date | timecurrency }}</span>
            <span v-if="currentTime > item.due_date">已失效</span>
          </td>
          <td class="text-nowrap">
            <span
              v-if="item.is_enabled==1"
              class="text-success"
            >啟用</span>
            <span
              v-else
              class="text-danger"
            >未啟用</span>
          </td>
          <td class="text-nowrap">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic example"
            >
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openModal(false,item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-primary btn-sm"
                @click="delopenModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div
      id="CouponsModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-md"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5
              id="exampleModalLabel"
              class="modal-title"
            >
              <span v-if="isNew">新增優惠券</span><span v-else>修改優惠券</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    id="title"
                    v-model="temCoupons.title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入標題"
                  >
                </div>
                <div class="form-group">
                  <label for="code">優惠碼</label>
                  <input
                    id="code"
                    v-model="temCoupons.code"
                    type="text"
                    class="form-control"
                    placeholder="輸入優惠碼"
                  >
                </div>
                <div class="form-group">
                  <label for="due_date">到期日</label>
                  <input
                    id="due_date"
                    v-model="temCoupons.due_date"
                    type="text"
                    class="form-control"
                    placeholder="輸入到期日"
                  >
                </div>
                <div class="form-group">
                  <label for="percent">折扣百分比</label>
                  <input
                    id="percent"
                    v-model="temCoupons.percent"
                    type="text"
                    class="form-control"
                    placeholder="輸入折扣"
                  >
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      v-model="temCoupons.is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    >
                    <label
                      class="form-check-label"
                      for="is_enabled"
                    >
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateCoupons"
            >
              確認優惠券
            </button>
          </div>
        </div>
      </div>
    </div>
    <Pagination
      :pages="pagination"
      class="d-flex justify-content-center"
      @thePage="getCoupons"
    />
    <AdminDeleteModal
      :delete-name="temCoupons"
      @deletethis="deleteCoupons"
    />
  </div>
</template>


<script>
import $ from 'jquery';
import Pagination from '../../components/Pagination';
import AdminDeleteModal from '../../components/back/AminDeleteModal';
export default {
    components: {
      Pagination,
      AdminDeleteModal,
    },
  data() {
    return {
      Coupons: [],
      pagination: {},
      temCoupons: {},
      isNew: false,
      isLoading: false,
    };
  },
  computed: {
    currentTime() {
      return (new Date()).valueOf() / 1000;
    },
    SortCoupons() {
      const vm = this;
      let newCoupons = [];
      if (vm.Coupons.length) {
        newCoupons = vm.Coupons.sort((a, b) => (a.due_date < b.due_date ? 1 : -1));
      }
      return newCoupons;
    },
  },
  created() {
    this.getCoupons();
  },
  methods: {
    getCoupons(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/admin/coupons?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        vm.Coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
        vm.Coupons.forEach((item) => {
          if (this.currentTime > item.due_date) {
            item.is_enabled = 0;
          }
        });
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.temCoupons = {};
        this.isNew = true;
      } else {
        this.temCoupons = Object.assign({}, item);
        this.isNew = false;
      }
      $('#CouponsModal').modal('show');
    },
    updateCoupons() {
      const vm = this;
      let api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/admin/coupon`;
      let httpmethods = 'post';
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/admin/coupon/${vm.temCoupons.id}`;
        httpmethods = 'put';
      }
      vm.$http[httpmethods](api, { data: vm.temCoupons }).then((response) => {
        if (response.data.success) {
          $('#CouponsModal').modal('hide');
          vm.getCoupons();
        } else {
          vm.getCoupons();
        }
      });
    },
    delopenModal(item) {
      this.temCoupons = Object.assign({}, item);
      $('#deleteModal').modal('show');
    },
    deleteCoupons() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/admin/coupon/${vm.temCoupons.id}`;
      vm.$http.delete(api).then((response) => {
        if (response.data.success) {
          $('#deleteModal').modal('hide');
          vm.getCoupons();
        } else {
          vm.getCoupons();
        }
      });
    },
  },
};
</script>

<style lang="scss">
  .overdue{
    text-decoration: line-through;
    opacity: .7;
  }
</style>