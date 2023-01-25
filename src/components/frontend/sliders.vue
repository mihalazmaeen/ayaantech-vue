<template>
 <section id="slider">
    <div class="heading" bis_skin_checked="1"></div>
    <div class="swiper-container aos-init aos-animate" data-aos="zoom-out-up" data-aos-duration="1500" bis_skin_checked="1">
       <div class="swiper-wrapper" bis_skin_checked="1">
      <div class="swiper-slide" bis_skin_checked="1">
        <div class="container-general" bis_skin_checked="1">
        <div class="gallery-wrap wrap-effect-2" bis_skin_checked="1">
                            <div class="item" style="background-image: url(https://ayaantec.com/public//storage/images/admin/banner//UEF1XTTkjp6mdKhyeXQbS6QrhJ0Jp61kygbve2MA.jpg)" bis_skin_checked="1">
                        
                </div>
                            <div class="item" style="background-image: url(https://ayaantec.com/public//storage/images/admin/banner//H6lslMUw9RPNYSk5eZyfgpaCmLdi5ZrujonD79DC.gif)" bis_skin_checked="1">
                        
                </div>
                            <div class="item" style="background-image: url(https://ayaantec.com/public//storage/images/admin/banner//utfEMVLujNs0IAwEtgmNtyDdQ6zYqkaJKvzjSB31.gif)" bis_skin_checked="1">
                        
                </div>
                            <div class="item" style="background-image: url(https://ayaantec.com/public//storage/images/admin/banner//ZPyUMM9nmN7M1Mh83iQD0SR8upKxEqvuU6I1qVl3.png)" bis_skin_checked="1">
                        
                </div>
                            <div class="item" style="background-image: url(https://ayaantec.com/public//storage/images/admin/banner//pPHVguNga2iK3v4iCDbtFy4DdlUdQ5r5zw60o9d1.png)" bis_skin_checked="1">
                        
                </div>
                    </div>
        </div>
    </div>
</div>
    </div>
</section>
</template>

<script>
import Swiper from "swiper";
import 'swiper/css';
const swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  mousewheel: {},
  effect: "cube",
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
export default {
  name: "sliders",
};
</script>

<style></style>
