<template>
    <section class="main-filter-container">
      <div class="max-filter">
        <label><span>Location </span><input name="address" id="location" type="search" placeholder="Where are you going?" value="London" /></label>
        <label for="check-in"><span>Check in </span><input id="check-in" placeholder="Add dates" value="" /></label>
        <label for="check-out"><span>Check out </span><input id="check-out" placeholder="Add dates" value="" /></label>
        <label class="guests" for="guests"><div><span>Guests </span><input id="guests" name="guests" placeholder="Add guests" value="1 guests" /></div></label><button><a href="#/explore"><i class="fas fa-search"></i></a></button>        
      </div>      
    </section>
</template>
<script>
export default {};
</script>