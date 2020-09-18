<template>
  <div class="header">
    <b-navbar>
      <template slot="logo">
        <!-- <img/> -->
     
      </template>
      <template slot="start">
        <b-navbar-item href="#">
          <router-link to="/" id="home">Home</router-link>
        </b-navbar-item>
        <b-navbar-item href="#">
          <router-link to="/Products">Products</router-link>
        </b-navbar-item>
   
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <router-link :to="{name: 'Login', query: {URL: this.URL}}" v-bind:URL="URL" v-if="!loggedIn"><b-button type="is-danger">Log in</b-button></router-link>  <!--if logged in is not true, show the login button -->
            <b-button v-if="loggedIn" class="button is-link" @click="logout" type="is-success">Logout</b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ['URL', 'loggedIn'],
  methods: {
    logout: function(){
      this.$emit('logout')
    }
  }
}
</script>


<style>
nav{
    width:80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-botton:10px;
}
.header{
  top: 0;
  height: 72px;
  background-color: #232653;
  position: fixed;
  z-index: 20;
  width: 90%;
  padding:0
}
</style>