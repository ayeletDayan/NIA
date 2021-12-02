<template>
  <section>
    <div class="stay-details-container">
        <img class="stay-img0" :src="stay.imgUrls[0]" />
        <img class="stay-img1" :src="stay.imgUrls[1]" />
        <img class="stay-img2" :src="stay.imgUrls[2]" />
        <img class="stay-img3" :src="stay.imgUrls[3]" />
        <img class="stay-img4" :src="stay.imgUrls[4]" />
    </div>

    <i class='fas fa-cat' style='font-size:24px'></i>
    <i class='far fa-snowflake' style='font-size:24px'></i>
    <i class='fas fa-smoking-ban' style='font-size:24px'></i>
    <i class='fas fa-utensils' style='font-size:24px'></i>
    <i class='fas fa-wifi' style='font-size:24px'></i>
    
  </section>
  

  <!-- Itzik -->
</template>

<script>
export default {
  data() {
    return {
      stay: null,
    };
  },
  watch: {
    "$route.params.stayId": {
      handler() {
        const stayId = this.$route.params.id;
        this.$store.dispatch({ type: "loadStay", stayId });
        this.stay = JSON.parse(
          JSON.stringify(this.$store.getters.showCurrStay)
        );
      },
      immediate: true,
    },
  },
};

// Todo - Itzik - page of stay - Shows details about the stay, allows booking and chat
</script>

<style>
</style>