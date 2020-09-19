<template>
  <div id="app">
    <div id="nav">
      <Header v-bind:URL="URL" v-bind:token="token" v-bind:loggedIn="loggedIn" @logout="logout"/>
    </div>
    <router-view @loggedIn="login($event)" @register="register($event)"/>
      <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data:function(){
    return {
      loggedIn: false,
      token: {},   
      URL: 'http://localhost:8000',
    }
  },
  methods: {
    login: function(event){
      console.log('event heard')
      this.loggedIn = true;
      this.token = event.token;
      this.$router.push({ 
        path: 'Products', 
        query: { token: this.token, URL: this.URL },
      });
    },
    logout: function(){
      this.loggedIn = false;
      this.token = {};
      this.$router.push('/')
    },
    register: function(event){
      this.loggedIn = true,
      this.token = event.token
      this.$router.push({ 
         path: 'Register',
         query: { token: this.token, URL: this.URL }
      });
   } 
 }
}
</script>

<style>
#app {
  font-family:Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
#nav {
  width: 100vw;
  font-family: 'Roboto', sans-serif;
}


</style>