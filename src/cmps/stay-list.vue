<template>
  <div class="stay-list main-layout">
    <ul class="list-grid clean-list">
      <li v-for="stay in staysToShow" class="stay-list" :key="stay._id">
        <div class="stay-card" @click.stop="goToDetails(stay._id)">
          <stay-preview :stay="stay" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import stayPreview from "../cmps/stay-preview.vue";

export default {
  data() {
    return {
    };
  },
  methods: {
    goToDetails(stayId) {
      this.$router.push('/stay/' + stayId);
    }
  },
  computed:{
    staysToShow() {
      console.log(this.$store.getters.stays)
      return this.$store.getters.stays;
    }
  },
  components: {
    stayPreview
  },
};

</script>
