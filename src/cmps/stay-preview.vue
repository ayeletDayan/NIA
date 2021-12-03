
<template>
    <section class="stay-preview">
        <el-carousel trigger="click" height="170px" :autoplay="false" :loop="false">
      <el-carousel-item v-for="imgUrl in stay.imgUrls" :key="imgUrl" >
       <img :src="imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
      <!-- <img :src="stay.imgUrls[0]" alt="" /> -->
      <section class="preview-text">
        <div class="preview-rate">
          <p v-if="stay.reviews.length"><span class="star"><i class='fas fa-star' style='font-size:14px; color:rgb(255, 55, 92)'></i></span> {{avgRate}}<span> ({{stay.reviews.length}})</span></p>
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