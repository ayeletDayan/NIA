<template>
  <section class="main-filter-container" :style="bgc">
    <div class="max-filter">
      <div class="filter-hover filter-location">
        <div @click="location = !location" class="filter-title">Location</div>
        <div @click="location = !location" class="filter-input">
          Where are you going?
        </div>
      </div>
      <div class="filter-hover filter-check-in">
        <div @click="datePicker = !datePicker" class="filter-title">
          Check in
        </div>
        <div class="filter-input">
          <date-picker @startDate="addStartDate" />
        </div>
      </div>
      <div class="filter-hover filter-check-out">
        <div @click="datePicker = !datePicker" class="filter-title">
          Check out
        </div>
          <div class="filter-input">
            <date-picker @startDate="addStartDate" />
        </div>
      </div>
      <div class="filter-hover filter-guests">
        <div>
          <div @click="guests = !guests" class="filter-title">Guests</div>
          <div @click="guests = !guests" class="filter-input">Add guests</div>
        </div>
        <button class="filter-explore">
          <a href="#/explore"><i class="fas fa-search"></i></a>
        </button>
      </div>
      <div class="location-container" v-if="location">
        <location />
      </div>

      <div class="guests" v-if="guests">
        <guests />
      </div>
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
      guests: false,
      startDate: "Add date",
      endDate: "Add date",
    };
  },
  components: { datePicker, location, guests },
  methods: {
    addStartDate(date) {
      this.startDate = date ? date : "Add date";
    },
    addEndDate(date) {
      this.endDate = date ? date : "Add date";
      this.datePicker = false;
    },
  },
  computed: {
    bgc() {
      return this.$route.name === "home"
        ? "background-color: #000000"
        : "background-color: #fff";
    },
  },
};
</script>