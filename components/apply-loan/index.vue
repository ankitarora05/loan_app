<template>
  <div class="loan-form-wrapper">
    <div class="loan-title">Apply Loan</div>
    <div class="loan-form">
      <div class="fields-container">
        <div
          class="field-wrapper"
          v-for="(field, index) in loanForm"
          :key="index"
        >
          <div class="field-label">{{ field.fieldName }}</div>
          <input
            type="text"
            v-model="field.fieldValue"
            aria-label="amount"
            :placeholder="field.placeholder"
            :class="field.fieldError ? 'input-error' : ''"
          />
        </div>
      </div>
      <div class="sumit-action">
        <div class="disclaimer">*Weekly repayment frequency</div>
        <div class="sumit-btn" @click="applyLoan()">Apply</div>
      </div>
    </div>
    <div class="loan-app-tracker">
      <div class="loan-track-title">
        Track Loan Application
      </div>
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
            <strong>Payment</strong>
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
            :class="loan.loanPayback || loan.loanActive ? 'loan-action' : ''"
            >{{ loan.loanPayback || loan.loanActive ? "EMI Due" : "" }}</span
          >
        </div>
        <div class="table-discalimer" v-if="loanList.length === 0">
          No loan applied yet!!
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    if (process.browser) {
      this.fetchLoanList();
    }
  },
  data() {
    return {
      loanForm: [
        {
          fieldName: "Loan name",
          fieldError: false,
          fieldValue: "",
          placeholder: "Set a loan name"
        },
        {
          fieldName: "Amount (S$)",
          fieldError: false,
          fieldValue: "",
          placeholder: "Enter amount you need"
        },
        {
          fieldName: "Time period (yr)",
          fieldError: false,
          fieldValue: "",
          placeholder: "Enter for year(s)"
        }
      ],
      formError: false,
      loanApplication: {
        loanName: "",
        loanAmount: "",
        loanTime: ""
      },
      loanList: []
    };
  },
  methods: {
    fetchLoanList() {
      this.loanList =
        JSON.parse(window.localStorage.getItem("loanForms")) || [];
    },
    applyLoan() {
      this.formError = false;
      this.loanForm.forEach(item => {
        if (item.fieldValue.length === 0) {
          item.fieldError = true;
          this.formError = true;
        }
      });
      if (this.formError) {
        return false;
      } else {
        this.loanApplication = {
          loanName: this.loanForm[0].fieldValue,
          loanAmount: this.loanForm[1].fieldValue,
          loanTime: this.loanForm[2].fieldValue,
          loanActive: false,
          loanPayback: false
        };
        if (process.browser) {
          let loanFroms =
            JSON.parse(window.localStorage.getItem("loanForms")) || [];
          loanFroms.push(this.loanApplication);
          window.localStorage.setItem("loanForms", JSON.stringify(loanFroms));
          this.fetchLoanList();
        }
      }
    }
  }
};
</script>
<style lang="scss">
.loan-form-wrapper {
  padding: 2rem;
  .loan-title {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .loan-form {
    padding-bottom: 1rem;
    .fields-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .field-wrapper {
        margin: 1rem;
        margin-left: 0;
        margin-bottom: 0;
        .field-label {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        input[type="text"] {
          width: 100%;
          padding: 1.2rem 2rem;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1.2rem;
          box-sizing: border-box;
        }
        .input-error {
          border: 1px solid red !important;
        }
      }
    }
  }
  .sumit-action {
    margin-top: 1rem;
    .disclaimer {
      font-style: italic;
      font-size: 1.1rem;
    }
    .sumit-btn {
      margin-top: 2rem;
      padding: 0.4rem 2rem;
      background: #325baf;
      color: #ffffff;
      font-size: 1.4rem;
      border-radius: 10px;
      font-weight: bold;
      display: inline-block;
      cursor: pointer;
    }
  }
  .loan-app-tracker {
    margin-top: 2rem;
    .loan-track-title {
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
}
// @media (min-width: 1281px) {

// }

// @media (min-width: 768px) and (max-width: 1024px) {

// }

// @media (min-width: 1025px) and (max-width: 1280px) {

// }

// @media (min-width: 768px) and (max-width: 1024px) {

// }

// @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

// }

@media (min-width: 400px) and (max-width: 767px) {
  .fields-container {
    display: block !important;
  }
}

@media (min-width: 320px) and (max-width: 400px) {
  .fields-container {
    display: block !important;
  }
}

@media (max-width: 320px) {
  .fields-container {
    display: block !important;
  }
}
</style>
