<template>
  <div>
    <div class="onPriceFilter-btn" @click="onPriceFilter = !onPriceFilter">Price</div>
    <div v-if="onPriceFilter">
      <price-filter />
    </div>
    <p v-if="isLoading">Loading...</p>
    <stay-list></stay-list>
  </div>
</template>

<script>
import stayList from "@/cmps/stay-list";
import PriceFilter from "../cmps/price-filter.vue";
export default {
  name: "stay",
  data() {
    return {
      onPriceFilter: false,
    };
  },
  components: {
    stayList,
    PriceFilter,
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>