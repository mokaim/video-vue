<template>
  <div>
    <TopNav></TopNav>
    <SideNav></SideNav>
    <Articles></Articles>
  </div>
</template>

<script>

import TopNav from "@/components/home/TopNav";
import SideNav from "@/components/home/SideNav";
import Articles from "@/components/home/Articles";


export default {
  name: "Home",
  components: {SideNav, TopNav, Articles}
}
</script>

<style scoped>

</style>