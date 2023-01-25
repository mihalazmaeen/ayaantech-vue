<template>
  <section class="map_sec">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6">
          <div class="map_inner">
            <h4>Find Us on Google Map</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.3049896715934!2d90.40464421498177!3d23.772151384578702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d1db46ec61%3A0x45203ae6068e299b!2sAyaan%20Tech%20Limited!5e0!3m2!1sen!2sbd!4v1673430841120!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6">
          <!-- reviews box -->
          <review-box></review-box>
          <!-- review box end -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import reviewBox from "../frontend/reviewBox.vue";
export default {
  components: { reviewBox },
  name: "mapSection",
};
</script>

<style></style>
