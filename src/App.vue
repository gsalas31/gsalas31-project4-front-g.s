<template>
<div>
  <h1>HellO WORLD </h1>
  <h2>{{cheese}}</h2>
  <HelloWorld/>
</div>





  
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue"

export default{
  name: 'App',
  data: function(){
    return{
      cheese: "gouda"
    }
  },
  components:{
    HelloWorld,
  }
};




</script>

<style>
 h1{
   color:green;
 }



</style>