<template>

  <div class="maincontainer">

    <div class="for_login">

        <h1 class="name_of_app_login">Fantasy Foami</h1>
        <h3 id="h3_login">Please login or sign-up for an account</h3>

        <label for='username'>Username</label>
        <input type="text" class="input is-primary" v-model="username"/>

        <label for='password'>Password</label>
        <input type="password" class="input is-primary" v-model="password"/>

        <br/>
        <button class="button is-primary" @click="handleLogin">Log In</button>

    </div>


    <div class="for_signup">

            <div class="actual_form">

                <h2 id="h2_signup">Sign Up</h2>
                <h3 id="h3_signup">Already have an account? Sign-in</h3>

                 <label for='first_name'>First Name</label>
                <input class='input' type='text' v-model='first_name'/>
                
                <label for='last_name'>Last name</label>
                <input class='input is-primary' type='text' v-model='last_name'/>
                     
                <label for='username'>Username</label>
                <input class='input' type='text' v-model='username'/>

                <label for='email'>Email</label>
                <input class='input is-primary' type='email' v-model='email'/> 

                <label for='password'>Password</label>
                <input class='input is-primary' type='password' v-model='password'/>

                <button class="button is-primary">Sign Up</button>

            </div> 
    </div>

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
.for_signup{
    background-image: url(https://res.cloudinary.com/g31ssa/image/upload/c_scale,w_1280/v1600392889/markus-spiske-4W5WWKaxsKs_of0j8z.jpg);
    opacity:0.4;
    background-position: center;
    background-repeat: no-repeat;
    padding:50px;
}
.actual_form{
    margin:0;
    padding:60px;
    justify-content: center;
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
#h2_signup{
    color: #232653;
    text-align: center;
    margin-bottom: 10px;
    font-size: 30px;
    margin-top: 20px;
}
#h3_signup{
    color: #232653;
    font-size: 14px;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 20px;
}
.input{
    margin:10px;
}
</style>