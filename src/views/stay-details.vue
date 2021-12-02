<template>
  <section v-if="stay">
    <h1>{{ stay.name }}</h1>
    <div>
      <div>
        <span>{{ avgStayRate }}</span
        ><span>{{ stay.reviews.length }}</span
        ><span>{{ stay.loc.city }}</span>
      </div>
      <div>
        a
      </div>
    </div>
    <div class="stay-details-container">
      <img
        v-for="(img, idx) in stay.imgUrls"
        :class="'stay-img' + idx"
        :src="img"
        :key="idx"
      />
    </div>
    <!-- <div class="stay-details-container">
      <img class="stay-img0" :src="stay.imgUrls[0]" />
      <img class="stay-img1" :src="stay.imgUrls[1]" />
      <img class="stay-img2" :src="stay.imgUrls[2]" />
      <img class="stay-img3" :src="stay.imgUrls[3]" />
      <img class="stay-img4" :src="stay.imgUrls[4]" />
    </div> -->

    <i class="fas fa-cat" style="font-size: 24px"></i>
    <i class="far fa-snowflake" style="font-size: 24px"></i>
    <i class="fas fa-smoking-ban" style="font-size: 24px"></i>
    <i class="fas fa-utensils" style="font-size: 24px"></i>
    <i class="fas fa-wifi" style="font-size: 24px"></i>

    <section>
      <div>
        <div>description</div>
        <div>eminities</div>
      </div>
      <div>order box</div>
    </section>
    <section>reviews</section>
    <section>map</section>
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
  computed: {
    avgStayRate() {
      return this.$store.getters.avgStayRate;
    },
  },
  watch: {
    "$route.params.stayId": {
      async handler() {
        try {
          const stayId = this.$route.params.id;
          await this.$store.dispatch({ type: "loadStay", stayId });
          this.stay = JSON.parse(
            JSON.stringify(this.$store.getters.showCurrStay)
          );
        } catch (err) {
          console.log(err);
        }
      },
      immediate: true,
    },
  },
};

// Todo - Itzik - page of stay - Shows details about the stay, allows booking and chat
</script>

<style>
</style>