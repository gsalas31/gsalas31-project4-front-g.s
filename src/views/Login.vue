<template>

    <div class="for_login">

        <h1 class="name_of_app_login">Fantasy Foami</h1>
        <h3 id="h3_login">Please login or sign-up for an account</h3>

        <label for='username'>Username</label>
        <input type="text" class="input is-primary" v-model="username"/>

        <label for='password'>Password</label>
        <input type="password" class="input is-primary" v-model="password"/>

        <br/>
        <button class="button is-primary" to="/Products" @click="handleLogin">Log In</button>

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
                    alert('Incorrect login')
                }
            });
        },
    },
};
</script>
<style>
.for_login{
    margin-top:110px;
    margin-bottom: 50px;
    width:80%;
    margin-left: auto;
    margin-right: auto;
}

.name_of_app_login{
   color:#232653;
   text-align: center;
   margin-bottom: 10px;
   font-size: 30px;
}
#h3_login{
    color: #9DB7C7;
    font-size: 14px;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 20px;
}

.input{
    margin:10px;
}
</style>