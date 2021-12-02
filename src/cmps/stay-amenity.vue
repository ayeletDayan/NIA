<template>
  <section>
    <img :src="symbol" alt="">
    <span>{{ item }}</span>
  </section>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    symbol() {
      var symbol = "";
      if (this.item === "TV") return symbol = "@/assets/img/tv.png";
      if (this.item === "Wifi") return symbol = "@/assets/img/wifi.png";
      if (this.item === "Kitchen") return symbol = "@/assets/img/kitchen.png";
      if (this.item === "Smoking allowed") return symbol = "@/assets/img/smoking.png";
      if (this.item === "Pets allowed") return symbol = "@/assets/img/paws.png";
      return symbol;
    },
  },
};
</script>

<style>
</style>