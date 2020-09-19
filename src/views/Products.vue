<template>
  <div id="container_products">
        <!-- <div id="decorative_image"></div> -->
        <h2 id="h2_shopping">Create your category</h2>
        <div class="field_for_category">
            <b-input placeholder="Enter you category..."></b-input>
            <button class=" create button is-primary" @click="newCategory" >Create</button>
            <button class=" edit button is-primary" >Edit</button>
            <!-- <button class=" edit button is-primary" @click="deleteCategory"> Delete </button> -->
        </div>
        <ul class="category_buttons">
            <li v-for="category of categories" v-bind:key="category.id">
            <button class="button is-info" id= "green" >{{category.name}}</button>
            </li>
        </ul>

        <div class="products_list">
        </div>
  
  </div>
</template>
<script>
export default{
    name: 'Products',
    data: function(){
        return{
            categories:[],
            name:'',
            products:[],
            comments:[],
            category_id:'',
        }
    },
    created: function(){
        this.getCategories()
    },
    methods:{
    newCategory: function(){
      const {token, URL} = this.$route.query
      fetch(`${URL}/api/categories/`, {
        method: 'post',
        headers: {
           "Content-Type": "application/json", 
            authorization: `JWT ${token}`
        },
        body: JSON.stringify({ name: this.name})
      })
      .then(() => {
        this.getCategories()
        // this.name = ''
      })
      .catch(err =>
       console.log(err)
      );
    },
    getCategories: function(){
        const {token, URL} = this.$route.query
        fetch(`${URL}/api/categories/`, {
            method: 'get',
            headers: {
                authorization: `JWT ${token}`,
            }
        })
        .then((response) => response.json())
        .then((data) => {
            this.categories = data
            console.log(data)
        })
    },
    getProducts: function(){
        const {token, URL} = this.$route.query
        this.category_id=event.target.id
        fetch(`${URL}/api/categories/${event.target.id}/products`, {
            method: 'get',
            headers: {
                authorization: `JWT ${token}`,
            }
        })
        .then((response) => response.json())
        .then((data) => {
            this.products = data
            console.log(data)
        })
    },

//     editCategory: function(){
//         const {token, URL} = this.$route.query
//         const id = this.editid
//         fetch(`${URL}/api/categories/${id}/`, {
//         method: "put",
//         headers: {
//             authorization: `jwt ${token}`,
//             "Content-Type": "application/json"
//             },
//          body: JSON.stringify({title: this.edittitle})
//         })
//         .then(() => {
//         this.getCategory();
//         })
//     },
//     deleteCategory: function(event){
//         const {token, URL} = this.$route.query;
//         const id = event.target.id;

//         fetch(`${URL}/api/categories/${id}/`, {
//             method: "delete",
//             headers: {
//                 authorization: `JWT ${token}`,
//                 "Content-Type": "application/json",
//             },
//         })
//         .then(() => {
//             this.getCategories();
//         })
//   }

//   }
    }
}
</script>
<style>
/* #decorative_image{
    background-image:url(https://res.cloudinary.com/g31ssa/image/upload/c_scale,w_1800/v1600108797/Screen_Shot_2020-09-14_at_2.39.30_PM_wvwi6p.png);
    height: 160px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 0px;
} */

#h2_shopping{
    color:#232653;
    font-size: 26px;
    margin:20px;
}
li{
    width:260px;
    border-radius: 8px;
    padding: 8px;
    color: white;
    text-align: center;
}
#school{
    background-color: #AC88BF;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
}
#home{
    background-color: #9DB7C7;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
}
#christmas{
    background-color: #D2618C;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
}
#birthday{
    background-color:#F7E0F4 ;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
}
#other{
    background-color: #232653;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
}
#options_products{
    display:flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
}
.field_for_category{
    display:flex;
    flex-direction: row;
    justify-content: center;
}
.create, .edit, .delete {
    margin-left: 20px;
    padding: 7px 11px;
    margin: 10px;
    margin-left: 20px;
    width: 82px;
    height: 40px;
}
#green{
    color:white;
    width:auto;
    margin:10px;
}
.category_buttons{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: center;


}

</style>