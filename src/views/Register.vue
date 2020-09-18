<template>
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

                    <button class="input is-primary" to="/Products" @click="handleRegister">Register</button>

                </div> 
        </div>    
</template>

<script>

export default {
    name: 'Register',
    data: function() {
        return {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        handleRegister: function() {
            fetch(`${this.URL}/auth/users/register/`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: this.first_name,
                    last_name: this.last_name,
                    username: this.username,
                    email: this.email,
                    password: this.password,
                })
            })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    alert('Try again')
                }
            })
        }
    }
}

</script>
<style>
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