<template>
  <div class="guests-main-container">
    <div class="guests-container">
      <div class="guests-titles">
        <div>
          <div class="guests-title">Adults</div>
          <div class="guests-note">Ages 13 or above</div>
        </div>
        <div>
          <div class="guests-title">Children</div>
          <div class="guests-note">Ages 2–12</div>
        </div>
        <div>
          <div class="guests-title">Infants</div>
          <div class="guests-note">Under 2</div>
        </div>
        <div>
          <div class="guests-title">Pets</div>
          <div class="guests-note bold">Bringing an assistance animal?</div>
        </div>
      </div>
      <div class="guests-btns">
        <div>
          <button class="guests-btn" @click="add">+</button>
          <span class="quantity">{{ quantity }}</span>
          <button class="guests-btn" @click="reduce">-</button>
        </div>
        <div>
          <button class="guests-btn" @click="add">+</button>
          <span class="quantity">{{ quantity }}</span>
          <button class="guests-btn" @click="reduce">-</button>
        </div>
        <div>
          <button class="guests-btn" @click="add">+</button>
          <span class="quantity">{{ quantity }}</span>
          <button class="guests-btn" @click="reduce">-</button>
        </div>
        <div>
          <button class="guests-btn" @click="add">+</button>
          <span class="quantity">{{ quantity }}</span>
          <button class="guests-btn" @click="reduce">-</button>
        </div>
      </div>
      <div></div>
    </div>
    <div class="guests-note">
      If you're lucky enough to have more than 2 pets with you, be sure to let
      your host know.
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    add() {
      this.quantity++;
    },
    reduce() {
      if (this.quantity) this.quantity--;
    },
  },
};
</script>