<template>
  <section class="stay-order-box">
  <div class="order-box">
      <div class="filter-check-in">
        <div @click="datePicker = !datePicker" class="check-in-order">
          Check in
        </div>
        <div>
          <date-picker @startDate="changeStartDate"></date-picker>
        </div>
      </div>
      <div class="filter-check-out">
        <div @click="datePicker = !datePicker" class="check-out-order">
          Check out
        </div>
        <div>
          <date-picker @endDate="changeEndDate" />
        </div>
      </div>
      <div class="guests-order">
          <label name="guests">
            <input @click="isOnGuests = !isOnGuests" id="guests" type="text" :placeholder="`${currTrip.persons} guests + ${currTrip.pets} pets`"></input>
          </label>
          <div class="guests" >
        <guests v-if="isOnGuests" @totalPers="setcurrGuests" />
      </div>
      </div>
          <button @click="sendOrder" class="order-btn">Check availability</button>
  </div>
  </section>
</template>

<script>
import datePicker from "./date-picker.vue";
import guests from "./guests.vue";

export default {
  data() {
    return {
        currTrip: {},
      datePicker: false,
      isOnGuests: false,
      startDate: 0,
      endDate: 0,
    //   addGuests: "Add guests",
    //   selectedLocation: "Where are you going?",
    //   nights: 0,
    //   persons: 0,
    //   pets: 0,
    //   searchData: {
    //     "location": null,
    //     "startDate": null,
    //     "endDate": null,
    //     "nights": 0,
    //     "persons":0,
    //     "pets": 0,
    //   },
    };
  },
  created() {
      this.currTrip = this.$store.getters.trip;
  },
  components: { datePicker, 
   guests 
  },
  methods: {
    sendOrder() {
      this.$store.commit({type: 'setOrder', order: this.currTrip})
      this.currTrip = {};
    },
    changeStartDate(date) {
      this.startDate = date.getTime();
      const dataStr = date.toString();
      this.currTrip.startDate = dataStr.slice(4, 10)
    },
    changeEndDate(date) {      
      this.endDate = date.getTime();
      const dataStr = date.toString();
      this.currTrip.endDate = dataStr.slice(4, 10);
      this.currTrip.nights = (this.endDate - this.startDate) / (1000 * 3600 * 24);
    },
    setcurrGuests(guests) {
      this.currTrip.persons = guests.totalPers;
      this.currTrip.pets = guests.pets;
    },
  },
};
</script>



     