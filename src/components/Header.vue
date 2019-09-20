<template lang="html">
  <header class="wrapper">
    <div class="row align-items-center ">
      <div class="col-3">
        <router-link :to="{ name: 'Index' }">
          <div class="logo"></div>
        </router-link>
      </div>
      <div class="col-9">
        <b-nav class="nav__bar justify-content-between" :class="{'nav__bar--blue': activeBar == true}">
          <li class="nav-item">
            <router-link exact :to="{ name: 'AboutUS'}">О нас</router-link>
          </li>
          <b-nav-item>Техническое регулирование</b-nav-item>
          <b-nav-item>Услуги</b-nav-item>
          <b-nav-item>Научно-методическая деятельность</b-nav-item>
          <b-nav-item>Реестры</b-nav-item>
          <b-nav-item>Контакты</b-nav-item>
        </b-nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name:'Header',
  data(){
    return{
      activeBar:false
    }
  },
  mounted(){
    if(this.$route.path !== '/'){
      this.activeBar = true
      document.querySelector('main').classList.add('blured')
    }else{
      this.activeBar = false
      document.querySelector('main').classList.remove('blured')
    }
  },
  watch:{
    '$route'(val){
      if(val.path !== "/"){
        this.activeBar = true
        document.querySelector('main').classList.add('blured')
      }else{
        this.activeBar = false
        document.querySelector('main').classList.remove('blured')
      }
    },
    activeBar(val){

      this.activeBar = val
    }
  }

}
</script>
