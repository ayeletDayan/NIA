<template>
<div>
  <p v-if="isLoading">Loading...</p>
    <stay-list></stay-list>
</div>
  
</template>

<script>
import stayList from '@/cmps/stay-list';
export default {
    name: "stay",

    components: {
    stayList
  },
   computed: {
     isLoading() {
      return this.$store.getters.isLoading;
    },
  },

}
</script>