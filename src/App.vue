<template>
  <div id="app">
    <Navigation/>
    <main class="py-3"> 
    <router-view/>

    </main>
  </div>
</template>
<script>
import Navigation from './components/Navigation'
export default {
  components:{
    Navigation
  }
}
</script>