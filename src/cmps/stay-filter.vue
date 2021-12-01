<template>
    <section class="main-filter-container">
      <div class="max-filter">
        <div>
        <div>Location </div>
        <input name="address" id="location" type="search" placeholder="Where are you going?" value="London" />
        </div>
        <div for="check-in"><div>Check in </div>
        <input id="check-in" placeholder="Add dates" value="" />
        </div>
        <div for="check-out"><div>Check out </div>
        <input id="check-out" placeholder="Add dates" value="" />
        </div>
        <div class="guests" for="guests"><div><div>Guests </div>
        <input id="guests" name="guests" placeholder="Add guests" value="1 guests" />
        </div>
        </div>
        <button><a href="#/explore"><i class="fas fa-search"></i></a></button>        
      </div>      
    </section>
</template>
<script>
export default {};
</script>