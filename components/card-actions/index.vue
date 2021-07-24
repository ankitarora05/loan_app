<template>
  <div class="card-actions-wrapper">
    <div class="card-actions-main">
      <div class="card-actions-item">
        <div class="card-action-image">
          <img src="~assets/images/Freeze_card.svg" alt="freeze card" />
        </div>
        <div class="card-action-title">Freeze card</div>
      </div>
      <div class="card-actions-item">
        <div class="card-action-image">
          <img src="~assets/images/Set_spend_limit.svg" alt="Set spent limit" />
        </div>
        <div class="card-action-title">Set spent limit</div>
      </div>
      <div class="card-actions-item">
        <div class="card-action-image">
          <img src="~assets/images/GPay.svg" alt="Add to GPay" />
        </div>
        <div class="card-action-title">Add to GPay</div>
      </div>
      <div class="card-actions-item">
        <div class="card-action-image">
          <img src="~assets/images/Replace_card.svg" alt="Replace Card" />
        </div>
        <div class="card-action-title">Replace card</div>
      </div>
      <div class="card-actions-item">
        <div class="card-action-image">
          <img src="~assets/images/Deactivate_card.svg" alt="Cancel Card" />
        </div>
        <div class="card-action-title">Cancel card</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.card-actions-wrapper {
  font-size: 1.4rem;
  color: #0c365a;
  background: #edf3ff;
  width: 414px;
  padding: 2rem;
  border-radius: 16px;
  .card-actions-main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .card-actions-item {
      text-align: center;
      margin: 0.5rem;
      .card-action-title {
        font-size: 1.3rem;
        color: #0c365a;
        margin-top: 1rem;
      }
    }
  }
}

@media (min-width: 1281px) {
  .card-actions-wrapper {
    margin: 2rem;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .card-actions-wrapper {
    margin: 2rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .card-actions-wrapper {
    margin: 2rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .card-actions-wrapper {
    margin: 2rem;
  }
}

@media (min-width: 400px) and (max-width: 767px) {
  .card-actions-wrapper {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin: auto;
    width: 100%;
  }
}

@media (min-width: 320px) and (max-width: 400px) {
  .card-actions-wrapper {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    width: 100%;
    margin: auto;
  }
}

@media (max-width: 320px) {
  .card-actions-wrapper {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    width: 100%;
    margin: auto;
  }
}
</style>
