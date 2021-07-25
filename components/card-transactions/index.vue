<template>
  <div class="card-transaction-accord">
    <div
      class="card-transaction-accord-wrapper"
      v-for="(data, index) in transactions"
      :key="index"
    >
      <div class="card-transaction-accord-item" @click="toggleAccord(index)">
        <div class="card-transaction-accord-item-title">
          <img
            src="~assets/images/card_detail.svg"
            alt="arrow"
            v-if="data.type == 'card'"
          />
          <img
            src="~assets/images/transaction.svg"
            alt="arrow"
            v-if="data.type == 'transaction'"
          />
          <div class="title-text">{{ data.title }}</div>
        </div>
        <div class="card-transaction-accord-item-image">
          <img
            v-if="!data.active"
            src="~assets/images/down-arrow.svg"
            alt="arrow"
          />
          <img v-else src="~assets/images/up-arrow.svg" alt="arrow" />
        </div>
      </div>
      <div class="card-transition-details" v-if="data.active">
        <div
          class="card-transition-details-item"
          v-for="(trans, idx) in data.transactions"
          :key="idx"
        >
          <div :class="fetchTransType(trans.type)">
            <img
              src="~assets/images/file-storage.svg"
              alt="card-transition-image"
              v-if="trans.type == 'storage'"
            />
            <img
              src="~assets/images/megaphone.svg"
              alt="card-transition-image"
              v-if="trans.type == 'megaphone'"
            />
            <img
              src="~assets/images/flights.svg"
              alt="card-transition-image"
              v-if="trans.type == 'flight'"
            />
          </div>
          <div class="card-transition-details-info">
            <div class="card-transition-details-header">
              <div class="card-transition-details-header-title">
                {{ trans.title }}
              </div>
              <div class="card-transition-details-header-amount">
                <div
                  :class="
                    trans.refund
                      ? 'card-transition-details-header-amount-value type-refund'
                      : 'card-transition-details-header-amount-value'
                  "
                >
                  {{ trans.amount }}
                </div>
                <div class="card-transition-details-header-arrow">
                  <img
                    src="~assets/images/next.svg"
                    alt="card-transition-next"
                  />
                </div>
              </div>
            </div>
            <div class="card-transition-details-date">{{ trans.date }}</div>
            <div class="card-transition-details-message">
              <div class="card-transition-details-message-image">
                <img
                  src="~assets/images/business-and-finance.svg"
                  alt="card-transition-image"
                />
              </div>
              <div class="card-transition-details-message-label">
                {{ trans.action }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="view-all-transactions" v-if="data.active">
        View all card transactions
      </div>
    </div>
  </div>
</template>
<script>
import data from "./transactions.json";
export default {
  methods: {
    fetchTransType(type) {
      if (type == "flight") {
        return "card-transition-details-image flight";
      } else if (type == "megaphone") {
        return "card-transition-details-image megaphone";
      } else if (type == "storage") {
        return "card-transition-details-image storage";
      } else {
        return "card-transition-details-image";
      }
    },
    toggleAccord(idx) {
      if (this.activeIdx === idx) {
        this.transactions[idx]["active"] = !this.transactions[idx]["active"];
      } else {
        this.transactions.forEach(item => {
          item.active = false;
        });
        this.transactions[idx]["active"] = true;
      }
      this.activeIdx = idx;
    }
  },
  data() {
    return {
      transactions: data,
      activeIdx: 0
    };
  }
};
</script>
<style lang="scss">
.card-transaction-accord {
  width: 366px;
  margin: 2rem auto;
  .card-transaction-accord-wrapper {
    margin: 2rem;
    .card-transaction-accord-item {
      display: flex;
      cursor: pointer;
      justify-content: space-between;
      align-items: center;
      background: #f5f9ff;
      border-radius: 8px;
      border: 1px solid #f5f5f5;
      padding: 1.5rem;
      &:last-child {
        margin-bottom: 0;
      }
      .card-transaction-accord-item-title {
        font-size: 1.4rem;
        color: #0c365a;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          margin-right: 1rem;
        }
      }
    }
    .card-transition-details {
      border: 1px solid #f5f5f5;
      width: 100%;
      padding: 1.5rem;
      background: #ffffff;
      .card-transition-details-item {
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px solid #f5f5f5;
        padding: 1rem 0;
        cursor: pointer;
        .card-transition-details-image {
          width: 4.8rem;
          height: 4.8rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .flight {
          background: #00d6b51a;
        }
        .megaphone {
          background: #f251951a;
        }
        .storage {
          background: #009dff1a;
        }
        .card-transition-details-info {
          width: 100%;
          margin-left: 2rem;
          flex: 1;
          .card-transition-details-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .card-transition-details-header-title {
              font-size: 1.4rem;
              color: #222222;
              font-weight: bold;
            }
            .card-transition-details-header-amount {
              display: flex;
              justify-content: flex-start;
              align-items: center;

              .card-transition-details-header-amount-value {
                font-size: 1.4rem;
                color: #222222;
                font-weight: bold;
                margin-right: 1rem;
              }
              .type-refund {
                color: #01d167;
              }
            }
          }
          .card-transition-details-date {
            color: #aaaaaa;
            font-size: 1.3rem;
            margin-top: 0.5rem;
          }
          .card-transition-details-message {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 1rem 0;
            .card-transition-details-message-image {
              width: 24px;
              height: 20px;
              border-radius: 8px;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #325baf;
              margin-right: 1rem;
            }
            .card-transition-details-message-label {
              color: #325baf;
              font-size: 1.2rem;
              font-weight: bold;
            }
          }
        }
      }
    }
    .view-all-transactions {
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3rem;
      color: #01d167;
      background: #edfff5;
      padding: 1.5rem;
      cursor: pointer;
    }
  }
}

@media (min-width: 400px) and (max-width: 767px) {
  .card-transaction-accord {
    width: 100%;
  }
}

@media (min-width: 320px) and (max-width: 400px) {
  .card-transaction-accord {
    width: 100%;
  }
}

@media (max-width: 320px) {
  .card-transaction-accord {
    width: 100%;
  }
}
</style>
