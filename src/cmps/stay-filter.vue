<template>
  <section class="main-filter-container">
    <div class="max-filter">
      <div>
        <div @click="location = !location" class="title">Location</div>
        <div @click="location = !location" class="input">Where are you going?</div>
      </div>
      <div>
        <div @click="datePicker = !datePicker" class="title">Check in</div>
        <div @click="datePicker = !datePicker" class="input">{{startDate}}</div>
      </div>
      <div>
        <div @click="datePicker = !datePicker" class="title">Check out</div>
        <div @click="datePicker = !datePicker" class="input">{{endDate}}</div>
      </div>
      <div>
        <div @click="guests = !guests" class="title">Guests</div>
        <div @click="guests = !guests" class="input">Add Guests</div>
      </div>
      <button>
        <a href="#/explore"><i class="fas fa-search"></i></a>
      </button>
    </div>

    <div class="date-picker" v-if="datePicker">
      <date-picker/>
    </div>

    <div class="location" v-if="location">
      <location/>
    </div>

    <div class="guests" v-if="guests">
      <guests/>
    </div>
  </section>
</template>
<script>
import datePicker from "./date-picker.vue";
import location from "./location.vue";
import guests from "./guests.vue";

export default {
  data() {
    return {
      datePicker: false,
      location: false,
      guests: false
    };
  },
  components: { datePicker, location, guests },
  computed: {
    startDate(){
      return 'Add date'
    },
    endDate(){
      return 'Add date'
    }
  },
};
</script>