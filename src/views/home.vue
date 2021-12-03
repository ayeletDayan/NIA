<template>
  <section>
    <stay-filter/> 
    <div  class="home">
    <div class="home-up">
    <router-link to="/stay">
      <img src="https://res.cloudinary.com/db0wqgy42/image/upload/w_1100,ar_16:9,c_fill,g_auto,e_sharpen/v1638307303/Paris/pexels-rachel-claire-4825701_1_eafnh2.jpg" alt="" />
    </router-link>
    </div>    
    <div class="explore-location">
      <img src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638304295/London/pexels-oleg-magni-1837591_mtowma.jpg" alt="" />
      <img src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638304324/New%20York/pexels-vlada-karpovich-4451427_xxasuw.jpg" alt="" />
      <img src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638307521/Budapest/pexels-timi-keszthelyi-2350351_sunbyl.jpg" alt="" />
      <img src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638345455/Jerusalem/jerusalem_bl5unz.jpg" alt="" />
      <img src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638305217/boats/pexels-nadi-lindsay-4874899_wrxfks.jpg" alt="" />
      <img src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638306558/castle/pexels-alesia-kozik-6022633_f6yxrk.jpg" alt="" />
      <img src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638307307/Paris/pexels-maria-orlova-4916534_jyewl6.jpg" alt="" />
      <img src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638306530/castle/pexels-jensen-r-1381729_cx2cet.jpg" alt="" />

    </div>
    <div class="host">
      <img src="../assets/img/host-home.jpg" alt="" />
    </div>
    </div>
  </section>
</template>

<script>
import stayFilter from '@/cmps/stay-filter';
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    stayFilter
  },
  computed: {},
  created() {},
  methods: {},
};
</script>
