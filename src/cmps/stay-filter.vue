<template>
  <section class="main-filter-container">
    <div class="max-filter">
      <div class="filter-hover location">
        <div @click="location = !location" class="filter-title">Location</div>
        <div @click="location = !location" class="filter-input">
        Where are you going?
        </div>
      </div>
      <div class="filter-hover check-in">
        <div @click="datePicker = !datePicker" class="filter-title">
          Check in
        </div>
        <div @click="datePicker = !datePicker" class="filter-input">
          {{ startDate }}
        </div>
      </div>
      <div class="filter-hover check-out">
        <div @click="datePicker = !datePicker" class="filter-title">
          Check out
        </div>
        <div @click="datePicker = !datePicker" class="filter-input">
          {{ endDate }}
        </div>
      </div>
      <div class="filter-hover guests">
        <div>
          <div @click="guests = !guests" class="filter-title">Guests</div>
          <div @click="guests = !guests" class="filter-input">Add Guests</div>
        </div>
        <button class="explore">
          <a href="#/explore"><i class="fas fa-search"></i></a>
        </button>
      </div>
    </div>
    <date-picker
      v-if="datePicker"
      @startDate="addStartDate"
      @endDate="addEndDate"
    />
    <div class="location" v-if="location">
      <location />
    </div>

    <div class="guests" v-if="guests">
      <guests />
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
  computed: {},
};
</script>