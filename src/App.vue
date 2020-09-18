<template>
  <div id="app">
    <Header/> 
    <router-view @loggedIn="login($event)"/>
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
        path: 'Main', 
        query: { token: this.token, URL: this.URL },
      });
    },
    logout: function(){
      this.loggedIn = false;
      this.token = {};
      this.$router.push('/')
    },
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #f4ff56;
}
</style>
