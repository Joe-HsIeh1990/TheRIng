<template>
  <div>
    <main>
      <Navbar />
      <router-view />
      <Footer />
    </main>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";
export default {
    name: 'Dashboard',
    components: {
        Navbar,
        Footer,
    },
    data(){
        return{}
    }

}
</script>

<style>

</style>