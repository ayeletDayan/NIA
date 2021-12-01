<template>
<div>
    <stay-filter></stay-filter>
    <stay-list></stay-list>
</div>
  
</template>

<script>
import stayFilter from '@/cmps/stay-filter';
import stayList from '@/cmps/stay-list';
export default {
    name: "stay",

    components: {
    stayFilter,
    stayList
  },

}
</script>