<template lang="html">
  <div class="wrapper ">
    <div class="row">
      <div class="col-5">
        <h1>{{about.title}}</h1>
        <div class="compass__img">
          <img src="/static/compass.svg" alt="">
        </div>
      </div>
      <div class="col-sm-7 font-18" v-html="about.introtext"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'AboutUs',
  props: ['menuBlue'],
  created(){
    this.$store.dispatch('fetchAboutPage')
  },
  computed:{
    about(){
      return this.$store.getters['about']
    }
  }
}
</script>
