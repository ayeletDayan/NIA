
<template>
    <section class="stay-preview">
      <img :src="stay.imgUrls[0]" alt="" />
      <p v-if="stay.reviews.length">⭐{{avgRate}}<span>({{stay.reviews.length}})</span></p>
      <p v-else-if="stay.reviews.length < 3">❤ {{stay.reviews.length}} reviews</p>
      <!-- <p v-else-if="newStay&&!stay.reviews.length">⭐ New</p> -->
      <p v-else >No reviews yet</p>
      <h4>{{ stay.type }}</h4>
      <h4>{{ stay.name }}</h4>
      <h4><strong>{{ stay.price }} $</strong> / night</h4>
      <!-- <p v-if="filterby.dates">{{totalPrice}}</p> -->    
      <!-- <p v-if="filterby.dates">{{dates}}</p> -->    
  </section>
</template>

<script>
export default {
  name: "stay-preview",
  props: {
    stay: Object
  },
  data() {
    return {
      avgRate: 0,
      currStay: this.stay,
    };
  },
  created() {
    this.loadCurrReviews(this.currStay);
    this.avgRate = this.$store.getters.avgRate;
    // isNewStay = this.$store.commit({})
  },
  methods: {
    loadCurrReviews(stay) {
      this.$store.commit({ type: "setStayReviews", stay });
    },
  },


}

</script>
<style>

</style>