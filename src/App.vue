<template>
  <main id="app">
    <Header/>
    <router-view/>
  </main>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>
