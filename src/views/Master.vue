<template>
    <!-- header -->
<header-section></header-section>
<!-- navigation -->
       <navigation-bar></navigation-bar>
       <router-view></router-view>



<!-- footer -->
<footer-section></footer-section>

</template>

<script>
import headerSection from '../components/frontend/headerSection.vue'; 
import navigationBar from '../components/frontend/navigationBar.vue';
import footerSection from '../components/frontend/footerSection.vue';  
export default {
components:{headerSection,navigationBar,footerSection},
name:'Master',
}
function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
}
</script>

<style>

</style>