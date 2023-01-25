<template>
  <section class="navigation">

  <nav>
      <div class="wrapper content">
        <div class="logo"><a href="https://ayaantec.com"><img style="height: 65px; width: 100%;" src="https://ayaantec.com/public/assets/frontend/uploads/logo.png" alt="Logo" srcset=""></a>
        </div>
        <input type="radio" name="slider" id="menu-btn">
        <input type="radio" name="slider" id="close-btn">
        <ul class="nav-links" id="SideNavBar">
          <label for="close-btn" id="menu-icon" class="btn close-btn"><i class="fas fa-times" onclick="CloseFunction()"></i></label>

    	   <li onclick="myFunction()" id="menuLink"><a href="#">Home</a></li>
              <li onclick="myFunction()"><a href="#service">Services</a></li>
              <li>
                <a href="#packages" class="desktop-item">SaaS</a>
                <input type="checkbox" id="showDrop">
                <label for="showDrop" class="mobile-item">SaaS</label>
                <ul class="drop-menu" id="dropdownBox">
                  <li><a href="https://pharmacyss.com" target="__blank" class="drop_menu_color">Pharmacy Management</a></li>
                  <li><a href="https://atlerp.xyz/" target="__blank" class="drop_menu_color">Business management Software</a></li>
                  <li><a href="https://ayaantec.com/comming-soon" target="__blank" class="drop_menu_color">OTA Solutions</a></li>
                  <li><a href="https://sellerpool.com/" target="__blank" class="drop_menu_color">E-commerce Platform</a></li>
                  <li><a href="https://biddapith.xyz/" target="__blank" class="drop_menu_color">School Management</a></li>
                  <!--<li><a href="#digital">Digital Marketing</a></li>-->
                </ul>
               </li>
              <li onclick="myFunction()" id="menuLink"><a href="#blog">Products</a></li>
              <li onclick="myFunction()" id="menuLink"><a href="#about-us">About Us</a></li>
              <li onclick="myFunction()" id="menuLink"><a href="#news">News & Blogs</a></li>
              <li for="close-btn" onclick="myFunction()" id="menuLink"><a href="#contact">Contact Us</a></li>
          
        </ul>
        <label for="menu-btn" class="btn menu-btn" id="bars" onclick="BarFunction()"><i class="fas fa-bars"></i></label>
      </div>

    </nav>
</section> 
</template>

<script>
export default {
name:'navigationBar',
}
</script>

<style>

</style>