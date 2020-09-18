<template>
  <div>
    <input type="text" class="input is-primary" v-model="username"/>
    <input type="password" class="input is-primary" v-model="password"/>
    <br/>
    <button class="button is-primary" @click="handleLogin">Log In</button>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data: function(){
    return{
      username:'',
      password:''
    }
  },
  methods: {
        handleLogin: function() {
            fetch(`${this.$route.query.URL}/auth/users/login/`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password,
                }),
            })
            .then(response => 
            {
                if (response.status !== 200) {
                    response.json()
                } else {
                    return response.json()
                }
            }
            )
            .then(data => {
                console.log(data)
                if (data) {
                this.$emit('loggedIn', data)
                } else {
                    alert('In correct login')
                }
            });
        },
    },
};
</script>