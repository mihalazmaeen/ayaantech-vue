<script>

import previewImage from '../../components/frontend/previewImage.vue';
import googleReview from '../../components/frontend/googleReview.vue';

export default {
  name: 'testComponent',
  components:{previewImage,googleReview},
  data(){
    return {
      name: '',
      email: '',
      phone: '',
      msg: [],
      error: 0,
      imageData:null,
      
      disabled: [true, true]
    }
  },
  watch: {
    email(value){
      // binding this to the data value in the email input
      // this.email = value;
      this.validateEmail(value);
    },
    phone(value){
      // this.password = value;
      this.validatePhone(value);
    }
  },
  methods:{
    validateEmail(value){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
  {
    this.msg['email'] = '';
    this.disabled = [false, this.disabled[1]]
  } else{
    this.msg['email'] = 'Invalid Email Address';
    this.disabled = [true, this.disabled[1]]
  } 
    },
    validatePhone(value){
      const validationRegex = /^\d{11}$/;
      if (this.phone.match(validationRegex)) {
          this.isValidPhoneNumber = true;
        
      } else {
        this.isValidPhoneNumber = false;
       
        
      }
    },
      handleSubmission(e) {
        if (!this.isValidPhoneNumber) {
          e.preventDefault();
         
             
           
          } else {
           alert(`Email: ${this.email} Phone: ${this.phone}`)
         
        }
      
    },
    chooseImage() {
      this.$refs.fileInput.click();
    },
    onSelectFile() {
      const input = this.$refs.fileInput
  const files = input.files
  if (files && files[0]) {
    const reader = new FileReader
    reader.onload = e => {
      this.imageData = e.target.result
    }
    reader.readAsDataURL(files[0])
    this.$emit('input', files[0])
  }
    }
    
  }
}
</script>

<template>
  <section class="map_sec">
    
    <div class="container-fluid">
      <div class="service-title section-title text-center title-ex1 w-50 mb-5" bis_skin_checked="1"><h2  class="news_title">Contact &amp; Reviews</h2></div>
      <div class="row">
        
        <div class="col-sm-12 col-md-6 col-lg-6 text-dark">
          <div class="map_inner ps-3 pb-3">
            <h4>Contact Form</h4>
           <form v-on:submit="handleSubmission()">
        <div class="form-group row">
            <label for="" class="col-sm-4 col-form-label">Full Name</label>
            <div class="col-sm-8">
            <input id="name" v-model="name" type="text" required class="form-control w-75 mt-2"  aria-describedby="" placeholder="Enter Full Name">
            </div>
        </div>
         <div class="form-group row">
            <label for="" class="col-sm-4 col-form-label">Email Address</label>
            <div class="col-sm-8">
            <input id="email" v-model="email" type="email" required class="form-control w-75 mt-2"  aria-describedby="emailHelp" placeholder="Enter email">
            <br>
            <span v-if="msg.email">{{msg.email}}</span>
        </div>
        </div>
         <div class="form-group row">
            <label for="" class="col-sm-4 col-form-label">Phone Number</label>
            <div class="col-sm-8">
            <input id="phone" v-model="phone" type="text" required class="form-control w-75 mt-2"  aria-describedby="" placeholder="Enter Phone Number">
            <br>
             <div class="invalid-warning" v-if="!isValidPhoneNumber">
                 Invalid phone number!
            </div>
        </div>
        </div>
        <div class="form-group row ">
            <label for="" class="col-sm-8 col-form-label">Choose Your Subject</label>
                <div class="form-check ms-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Subject One</label>
                </div>
                <div class="form-check ms-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Subject Two</label>
                </div>
                <div class="form-check ms-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Subject Three</label>
                </div>
                 <div class="form-check ms-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Subject Four</label>
                </div>
        </div>
          <div class="form-group row">
            
            
              <preview-image></preview-image>
            
           
          </div>
        
       
       

             <button type="submit" id="submit_btn" :disabled="isValidPhoneNumber == false " class="btn btn-primary">Submit</button>
        </form>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6">
          <!-- reviews box -->
          <google-review></google-review>
          <!-- review box end -->
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
.service-title {
    margin-top: 10px !important;
    margin-bottom: 60px !important;
    padding: 5px 5%;
    height: 55px;
    background-color: #21256B;
    color: #fff;
}
.map_sec {
    margin: 30px 0 !important;
    background-color: #fff;
    padding: 70px 0 50px !important;
}
.map_sec .map_inner {
    box-shadow: 0 0 30px rgb(0 0 0 / 50%);
    background-color: #a0a8b2 !important;
    border-radius: 8px;
}
</style>