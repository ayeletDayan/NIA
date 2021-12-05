<template>
  <section class="main-layout" v-if="stay">
    <h1>{{ stay.name }}</h1>
    <div class="details-header">
      <div>
        <span><i class='fas fa-star' style='font-size:14px; color:rgb(255, 55, 92)'></i></span>
        <span> {{ avgStayRate }}</span
        ><span>
          ({{ stay.reviews.length }}
          <span class="underline">reviews</span> ) </span
        ><span class="underline"> {{ stay.loc.city }}</span>
      </div>
      <div class="details-btns">
        <label class="share-btn" @click="share">
          <img class="icon-btn" src="@/assets/img/share.jpg" />
          <button>Share</button>
        </label>
        <label class="share-btn" @click="save">
          <img class="icon-btn" src="@/assets/img/heart.png" />
          <button>Save</button>
        </label>
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

    <section class="main-layout">
      <div>
        <div><h2>{{ stay.summary }}</h2></div>
        <div>
          <span>{{ stay.capacity }} guests</span><span> 2 bedrooms</span
          ><span> 4 beds</span>
        </div>

        <hr />
        <div>
          <h2>What this place offers</h2>
          <stay-amenity
            v-for="item in stay.amenities"
            :key="item"
            :item="item"
          />
        </div>
      </div>
      <div>order box</div>
    </section>
    <hr />
    <stay-review
      v-for="review in stay.reviews"
      :key="review.id"
      :review="review"
    />
    <hr />
    <section class="main-layout">
      <GmapMap
        :center="{ lat: stay.loc.lat, lng: stay.loc.lng }"
        :zoom="13"
        map-type-id="terrain"
        style="width: 1120px; height: 480px"
      >
        <!-- <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        /> -->
      </GmapMap>
    </section>
  </section>

  <!-- Itzik -->
</template>

<script>
import stayAmenity from "@/cmps/stay-amenity";
import stayReview from "@/cmps/stay-review";
export default {
  data() {
    return {
      stay: null,
    };
  },
  // created: {
  //   foo() {
  //     console.log(stay.loc.lat);
  //     console.log(stay.loc.lng);
  //   },
  // },
  methods: {
    save() {
      console.log("saved");
    },
    share() {
      console.log("shared");
    },
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
  components: {
    stayAmenity,
    stayReview,
  },
};

// Todo - Itzik - page of stay - Shows details about the stay, allows booking and chat
</script>

<style>
.underline {
  text-decoration-line: underline;
}
.icon-btn {
  height: 16px;
}
button {
  font-weight: 600;
  background-color: transparent;
  border: none;
  text-decoration-line: underline;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,
    -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
}
.share-btn {
  display: flex;
}
.share-btn :hover {
  cursor: pointer;
}
.details-btns {
  display: flex;
}
.details-header {
  display: flex;
  justify-content: space-between;
}
.star{
  background-color: rgb 255.55.92;
}
</style>