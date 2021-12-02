<template>
  <section class="date-picker">
    <div>
      <date-picker v-model="time" format="DD MMM YYYY" range @change="setDate"></date-picker>
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
    };
  },
  methods:{
    setDate(date, type){
      console.log(date, type);
    }
  },
  computed: {},
};
</script>