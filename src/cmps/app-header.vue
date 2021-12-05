<template>
  <header class="full main-layout" :style="bgc">
    <div>
      <nav :style="bgc">
        <router-link class="logo" :style="bgc" to="/">
          <div v-if="home && !isScroll">
            <img src="../assets/img/logo-cloud.jpg" alt="" />
          </div>
          <div v-else>
            <img src="../assets/img/logo-cloud-white.jpg" alt="" />
          </div>
          <div class="logo-txt">niabnb</div>
        </router-link>

        <div :style="smallFilter" class="small-filter" @click="onSmallFilter">
          <span class="small-filter-txt">Start your search</span>
            <button class="small-filter-explore">
              <a href="#/explore"><i class="fas fa-search"></i></a>
            </button>
        </div>

        <div class="header-right">
          <router-link class="hover" :style="routerClr" to="/stay"
            >Explore</router-link
          >
          <router-link class="hover" :style="routerClr" to="/stay/edit/:id"
            >Become a Host</router-link
          >
          <router-link to="/login">
            <div class="login-btn">
              <div class="bar">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
              <div class="user-img">
                <img
                  src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_100,h_100,g_face/v1638252722/cats/nmlj2xgdlobdsrf7q22y.jpg"
                  alt=""
                />
              </div>
            </div>
          </router-link>
        </div>
      </nav>
      <section class="loggedin-user" v-if="loggedInUser">
        <router-link :to="`/user/${loggedInUser._id}`">
          {{ loggedInUser.fullname }}
        </router-link>
        <span>{{ loggedInUser.score }}</span>
      </section>
      <div :style="scroll"><stay-filter key="filter" /></div>
    </div>
  </header>
</template>
<script>
import stayFilter from "./stay-filter";
export default {
  data() {
    return {
      home: null,
      isScroll: false,
    };
  },
  components: {
    stayFilter,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      this.isScroll = window.scrollY !== 0 ? true : false;
    },
    onSmallFilter(){
      this.isScroll = !this.isScroll
    }
  },
  watch: {
    "$route.name": {
      handler() {
        this.home = this.$route.name === "home" ? true : false;
      },
      immediate: true,
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    bgc() {
      return this.$route.name !== "home" || this.isScroll
        ? "background-color: #fff; color: rgb(255, 55, 92)"
        : "background-color: #000000; color: #fff";
    },
    routerClr() {
      return this.$route.name !== "home" || this.isScroll
        ? "color: #000000"
        : "color: #fff";
    },
    scroll() {
      return this.isScroll ? "display: none;" : "display: block;";
    },
    smallFilter() {
      return this.isScroll ? "display: block;" : "display: none;";
    },
  },
};
</script>