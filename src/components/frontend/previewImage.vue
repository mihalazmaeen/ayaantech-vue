<template>
  <div class="row">
    <div class="col-sm-8">
    <label class="col-sm-4 col-form-label" for="customFile">Profile Image upload</label>
    <input
      ref="fileInput"
      type="file"
      @input="pickFile">
    </div>
    <div
      class="imagePreviewWrapper col-sm-4"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage">
    </div>
    
    
  </div>
</template>
 
<script>
;
export default {
    name:'previewImage',
  data() {
      return {
        previewImage: null
      };
    },
  methods: {
      selectImage () {
          this.$refs.fileInput.click()
      },
      pickFile () {
        let input = this.$refs.fileInput
        let file = input.files
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
      }
  }
}
</script>
 
<style scoped>
.imagePreviewWrapper {
    width: 100px;
    height: 100px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
</style>