<template>
  <div class="stay-list">
    <h1>hello list</h1>
    <ul class="store-list-main grid">
      <li v-for="stay in staysToShow" class="stay-list" :key="stay._id">
        <router-link :to="'/stay/' + stay._id">
          <stay-preview :stay="stay" />
        </router-link>
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
  methods: {},
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

// Todo - Ayelet - List of stays
</script>