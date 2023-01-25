<template>
    <!-- slider starts -->
<sliders></sliders>
<!-- slider ends -->
<!-- Service Section -->
<service-section></service-section>
<!-- service section ends -->
<!-- about us starts -->
<aboutus></aboutus>
<!-- about us ends -->
<!-- blog starts -->
<blog></blog>
<!-- blog ends -->
<!-- Social section starts -->
<social></social>
<!-- Social Section ends -->
<!-- news section starts -->
<news></news>
<!-- news section ends -->
<!-- conatct us section -->
<contact-us></contact-us>
    <!--contact us ends  -->
<!-- map section ends -->
<map-section></map-section>
<!-- map section ends -->

<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
</template>

<script>
import sliders from '../../components/frontend/sliders.vue';
import reviewBox from '../../components/frontend/reviewBox.vue';
import serviceSection from '../../components/frontend/serviceSection.vue';
import aboutus from '../../components/frontend/aboutus.vue';
import blog from '../../components/frontend/blog.vue';
import website from '../../components/frontend/website.vue';
import news from '../../components/frontend/news.vue';
import social from '../../components/frontend/social.vue';
import contactUs from '../../components/frontend/contactUs.vue';
import mapSection from '../../components/frontend/mapSection.vue';
export default {
    components:{sliders,reviewBox,serviceSection,aboutus,blog,website,social,news,contactUs,mapSection},
name:'home',
}
</script>

<style>

</style>