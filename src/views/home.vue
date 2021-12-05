<template>
  <section>    
    <div class="home">
      <div class="home-up-container">
        <router-link to="/stay">
          <img
            src="https://res.cloudinary.com/db0wqgy42/image/upload/w_1500,ar_16:9,c_fill,g_auto,e_sharpen/v1638307303/Paris/pexels-rachel-claire-4825701_1_eafnh2.jpg"
            /><span :class="showTxt" >Not sure where to go? Perfect.</span>
        </router-link>
      </div>
      <div class="explore-location main-layout">
        <h1>Popular destinations</h1>
        <div class="explore-locations">
          <div class="explore-location">
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638304295/London/pexels-oleg-magni-1837591_mtowma.jpg"
              alt=""
            />
            <h6>London</h6>
          </div>
          <div class="explore-location">
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638304324/New%20York/pexels-vlada-karpovich-4451427_xxasuw.jpg"
              alt=""
            />
            <h6>New York</h6>
          </div>

          <div class="explore-location">
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638307521/Budapest/pexels-timi-keszthelyi-2350351_sunbyl.jpg"
              alt=""
            />
            <h6>Budapest</h6>
          </div>
          <div class="explore-location">
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638345455/Jerusalem/jerusalem_bl5unz.jpg"
              alt=""
            />
            <h6>Jerusalem</h6>
          </div>
        </div>

        <div class="explore-location main-layout">
          <h1>Unique stays</h1>
          <div class="explore-locations">
            <div class="explore-location">
              <img
                src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638305217/boats/pexels-nadi-lindsay-4874899_wrxfks.jpg"
                alt=""
              />
              <h6>Houseboat</h6>
            </div>
            <div class="explore-location">
              <img
                src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638306558/castle/pexels-alesia-kozik-6022633_f6yxrk.jpg"
                alt=""
              />
              <h6>Castle</h6>
            </div>
            <div class="explore-location">
              <img
                src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638307307/Paris/pexels-maria-orlova-4916534_jyewl6.jpg"
                alt=""
              />
              <h6>Luxe</h6>
            </div>
            <div class="explore-location">
              <img
                src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638304886/New%20York/pexels-max-vakhtbovych-6969866_pajfoi.jpg"
                alt=""
              />
              <h6>Apartment</h6>
            </div>
          </div>
        </div>

        <h1>Top rated</h1>
        <div class="explore-locations">
          <div class="explore-location">
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638306503/castle/pexels-super-claudioo-6697718_lxbsuh.jpg"
              alt=""
            />
            <h6>
              <i
                class="fas fa-star"
                style="font-size: 14px; color: rgb(255, 55, 92)"
              ></i>
              Holy City, Jerusalem
            </h6>
          </div>
          <div class="explore-location">
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638304898/New%20York/pexels-max-vakhtbovych-7195534_mqb90n.jpg"
              alt=""
            />
            <h6>
              <i
                class="fas fa-star"
                style="font-size: 14px; color: rgb(255, 55, 92)"
              ></i>
              Life in New York, New York
            </h6>
          </div>
          <div class="explore-location">
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638304278/London/pexels-daria-shevtsova-3326213_hwgyif.jpg"
              alt=""
            />
            <h6>
              <i
                class="fas fa-star"
                style="font-size: 14px; color: rgb(255, 55, 92)"
              ></i>
              Boutique studio, Budapest
            </h6>
          </div>
          <div class="explore-location">
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_360,w_257,g_face/v1638304311/London/pexels-connor-danylenko-3075532_ulswcp.jpg"
              alt=""
            />
            <h6>
              <i
                class="fas fa-star"
                style="font-size: 14px; color: rgb(255, 55, 92)"
              ></i>
              London Bridge, London
            </h6>
          </div>
        </div>
      </div>

      <div class="questions-about-hosting-container">
        <router-link to="/stay/edit/:id">
          <span class="questions-about-hosting">Questions about hosting?</span>
          <img src="../assets/img/host-home.jpg" alt=""
        /></router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      isScroll: false
    };
  },
  computed: {
    showTxt(){
      return this.isScroll? "hidden" : "show"
    }
  },
  created() {},
  methods: {},
};
</script>
