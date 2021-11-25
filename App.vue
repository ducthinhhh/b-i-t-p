<template>
  <div >
    <comHeader />
    <router-view />
    <com-footer />
  </div>
</template>

<script>
import ComFooter from './layouts/comFooter.vue'
import comHeader from './layouts/comHeader.vue'
export default {
name:'#app',
components:{ comHeader, ComFooter,}
}
</script>

<style>
* {
   padding: 0;
    margin: 0;
    font-family: sans-serif;
}
</style>