<template>
  <div>
    <loading :active.sync="isLoading" />
    <table class="table mt-4">
      <thead>
        <tr>
          <th>訂單編號</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in sortOrder"
          :key="key"
          :class="{ 'text-secondary': !item.is_paid }"
        >
          <td>{{ item.create_at | timecurrency }}</td>
          <td>
            <span
              v-if="item.user"
              v-text="item.user.email"
            />
          </td>
          <td>
            <ul class="list-unstyled">
              <li
                v-for="(product, i) in item.products"
                :key="i"
                class="text-dark"
              >
                {{ product.product.title }} 數量：{{ product.qty }}
                隻
              </li>
            </ul>
          </td>
          <td class="text-right">
            {{ item.total | currency }}
          </td>
          <td>
            <strong
              v-if="item.is_paid"
              class="text-success"
            >已付款</strong>
            <span
              v-else
              class="text-muted"
            >尚未起用</span>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :pages="pagination"
      @emitPages="getOrders"
    />
  </div>
</template>
<script>
import Pagination from "../../components/Pagination";
export default {
  components: {
    Pagination
  },
  data() {
    return {
      orders: {},
      isNew: false,
      pagination: {},
    };
  },
  computed: {
    sortOrder() {
      const vm = this;
      let newOrder = [];
      if (vm.orders.length) {
        newOrder = vm.orders.sort((a, b) => {
          const aIsPaid = a.is_paid ? 1 : 0;
          const bIsPaid = b.is_paid ? 1 : 0;
          return bIsPaid - aIsPaid;
        });
      }
      return newOrder;
    }
  },
  created() {
    this.getOrders();
  },
  methods: {
    getOrders(currentPage = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/admin/orders?page=${currentPage}`;
      vm.isLoading = true;
      vm.$http.get(url, vm.tempProduct).then(response => {
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
    }
  }
};
</script>