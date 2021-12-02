<template>
  <section class="main-filter-container">
    <div class="max-filter">
      <div>
        <div class="title">Location</div>
        <div class="input">Where are you going?</div>
      </div>
      <div>
        <div @click="datePicker = !datePicker" class="title">Check in</div>
        <div @click="datePicker = !datePicker" class="input">Add dates</div>
      </div>
      <div>
        <div @click="datePicker = !datePicker" class="title">Check out</div>
        <div @click="datePicker = !datePicker" class="input">Add dates</div>
      </div>
      <div>
        <div class="title">Guests</div>
        <div class="input">Add Guests</div>
      </div>
      <button>
        <a href="#/explore"><i class="fas fa-search"></i></a>
      </button>
    </div>

    <div class="date-picker" v-if="datePicker">
      <date-picker/>
    </div>
  </section>
</template>
<script>
import datePicker from "./date-picker.vue";

export default {
  data() {
    return {
      datePicker: false,
      date: ''
    };
  },
  components: { datePicker },
  computed: {},
};
</script>