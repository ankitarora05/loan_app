<template>
  <div class="admin-dash-board">
    <div class="admin-dash-title">Loan Application(s)</div>
    <div class="loan-grid-table">
      <div class="grid">
        <span>
          <strong>Name</strong>
        </span>
        <span>
          <strong>Amount</strong>
        </span>
        <span>
          <strong>Tenure</strong>
        </span>
        <span>
          <strong>Status</strong>
        </span>
        <span>
          <strong>Action</strong>
        </span>
      </div>
      <div class="grid" v-for="(loan, index) in loanList" :key="index">
        <span>{{ loan.loanName }}</span>
        <span>{{ loan.loanAmount }}</span>
        <span>{{ loan.loanTime }}</span>
        <span :class="loan.loanActive ? 'loan-green' : 'loan-orange'">{{
          loan.loanActive ? "Success" : "Pending"
        }}</span>
        <span
          :class="loan.loanActive ? '' : 'loan-action'"
          @click="aprooveLoan(index)"
          >{{ loan.loanActive ? "" : "Aproove" }}</span
        >
      </div>
      <div class="table-discalimer" v-if="loanList.length === 0">
        No loan applied yet!!
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loanList: []
    };
  },
  mounted() {
    if (process.browser) {
      this.fetchLoanList();
    }
  },
  methods: {
    fetchLoanList() {
      this.loanList =
        JSON.parse(window.localStorage.getItem("loanForms")) || [];
    },
    aprooveLoan(idx) {
      this.loanList[idx]["loanActive"] = true;
      window.localStorage.setItem("loanForms", JSON.stringify(this.loanList));
      this.fetchLoanList();
    }
  }
};
</script>
<style lang="scss">
.admin-dash-board {
  flex: 1;
  margin: 3rem;
  .admin-dash-title {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .loan-grid-table {
    margin-top: 1rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      font-size: 1.2rem;
    }
    .loan-action {
      color: blue;
      text-decoration: underline;
      cursor: pointer;
    }

    .grid > span {
      padding: 8px 4px;
      border-bottom: 1px solid #dedede;
    }
    .loan-green {
      color: #05d166;
    }
    .loan-orange {
      color: #ff5722;
    }
    .table-discalimer {
      font-size: 1.1rem;
      text-align: center;
      margin-top: 1rem;
    }
  }
}
</style>
