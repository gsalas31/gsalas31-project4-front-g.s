<template>
    <b-navbar>
      <template slot="start">
        <b-navbar-item href="#">
          <router-link to="/">Fantasy Foami</router-link>
        </b-navbar-item>
        <!-- <b-navbar-item href="#">
          <router-link to="/Products">Products</router-link>
        </b-navbar-item> -->
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div >
            <router-link :to="{ name: 'Register', query: { URL: this.URL }}" v-if="!loggedIn" v-bind:URL="URL"><b-button type="button is-primary">Register</b-button></router-link>
            
            <router-link :to="{name: 'Login', query: {URL: this.URL}}" v-bind:URL="URL" v-if="!loggedIn"><b-button type="button is-primary">Log in</b-button></router-link>
            <b-button v-if="loggedIn" class="button is-link" @click="logout" type="button is-info">Logout</b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
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
.navbar-item{
  display: flex;
  justify-content: center;
}
.is-primary{
  margin:10px;
}
.navbar-item{
  font-size: 30px;
}
</style>