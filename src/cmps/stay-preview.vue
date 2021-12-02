
<template>
    <section class="stay-preview">
      <img :src="stay.imgUrls[0]" alt="" />
      <section class="preview-text">
        <div class="preview-rate">
          <p v-if="stay.reviews.length">⭐{{avgRate}}<span> ({{stay.reviews.length}})</span></p>
          <p v-else-if="stay.reviews.length < 3">❤ {{stay.reviews.length}} reviews</p>
          <!-- <p v-else-if="newStay&&!stay.reviews.length">⭐ New</p> -->
          <p v-else >No reviews yet</p>
        </div>
        <p>{{ stay.type }}</p>
        <p>{{ stay.name }}</p>
        <p><strong>{{ stay.price }}$</strong> / night</p>
        <!-- <p v-if="filterby.dates">{{totalPrice}}</p> -->    
        <!-- <p v-if="filterby.dates">{{dates}}</p> -->  
      </section>  
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
      this.$store.commit({ type: "setCurrStay", stay: this.currStay });
      this.avgRate = this.$store.getters.avgStayRate;
  },
  methods: {
  },


}

</script>
<style>

</style>