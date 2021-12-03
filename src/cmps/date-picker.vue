<template>
  <section class="date-picker">       
    <div class="calendar">
      <span>Add dates: </span> 
      <date-picker
        v-model="time"
        format="DD MMM YYYY"
        range
        @pick="setDate"
      ></date-picker>
    </div>
  </section>
</template>
<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: { DatePicker },
  data() {
    return {
      time: null,
      startDate: null,
      endDate: null,
      startInput: null,
      endInput: null,
    };
  },
  methods: {
    setDate(input) {
      if (!this.startDate) {
        this.startInput = input;
        this.startDate = input.toString();
        this.$emit("startDate", this.startDate.slice(4, 10));
      } else {
        this.endInput = input;
        this.endDate = input.toString();
        this.$emit("endDate", this.endDate.slice(4, 10));
        const days =
          (this.endInput.getTime() - this.startInput.getTime()) /
          (1000 * 3600 * 24);
        console.log(days);
      }
    },
  },
};
</script>