<template>
  <div>
        <div id="decorative_image"></div>
        <h2 id="h2_shopping_main">Create your categories and Products</h2>
        <div class="field_for_category">
            <b-input v-model="name" placeholder="Enter you category..."></b-input>
            <button class=" create button is-primary" @click="newCategory" >Create</button>
        </div>

        <div class="container_categories">
            <ul class="category_buttons">
                <li  id="lista" v-for="category of categories" v-bind:key="category.id" >
                <button class="button is-info" v-bind:id="category.id" @click=getProducts>{{category.name}}</button>
                <label>by:{{category.owner}}</label>

                <div>
                    <button class="edit button is-primary green" v-bind:id="category.id" @click="deleteCategory"> Delete</button>
                    <!-- <button class=" edit button is-primary" >Edit</button> -->
                        <section>
                            <b-collapse :open="false" aria-id="contentIdForA11y1">
                                <button
                                    class="button is-primary"
                                    slot="trigger"
                                    aria-controls="contentIdForA11y1">CREATE YOUR PRODUCT</button>
                                <div class="notification">
                                    <div class="creating_products">
                                        <h2 id="h2_shopping">Create your Product</h2>
                                        <div class="adding_product">
                                                <b-field>
                                                    <b-input v-model="description" value="Product's name"></b-input>
                                                </b-field>
                                                <b-field>
                                                    <b-input v-model="image" value="Image - Enter a valid URL"></b-input>
                                                </b-field>
                                        </div>
                                        <div>
                                            <button class=" create button is-primary" v-bind:id="category.id" @click="newProduct">Create</button>
                                        </div>
                                    </div>
                                </div>
                            </b-collapse>
                        </section>
                </div>
                </li>
            </ul>
        </div>
        <div>
            <ul class="products_list">
                <li id="actual-list" v-for="product of products" v-bind:key="product.id">
                    <div class="container_products">
                        <div id="image_product"><img :src="product.image" :alt="product.description "></div>
                        {{product.description}}
                    </div>
                    <!-- <button class="edit button is-primary green"> Update</button> -->
                    <button class="edit button is-primary" v-bind:id="product.id" v-bind:category="product.category" @click="deleteProduct" >Delete</button>
                    <!-- <button class="edit button is-primary"  @click="getComments">Comments</button> -->
                    <div class="div_of_comments">
                        <p class="comments" v-for="comment of product.comments" v-bind:key="comment.id">{{comment.the_comment}} <br/> <b>-{{comment.owner}}</b></p>
                        <button class="edit button is-primary">Delete</button>
                    </div>
                </li>
            </ul>
        </div>

        <!-- <div>
            <ul class="comments_list">
                <li id="actual-list" v-for="comment of comments" v-bind:key="the_comment.id">
                    <div id="comment_product">
                        {{comment.subject}}
                        {{getComments.the_comment}}
                    </div>
                    <button class="edit button is-primary" >Delete</button>
                </li>
            </ul>
        </div> -->

  </div>
</template>


<script>
export default{
    name: 'Products',
    data: function(){
        return{
            categories:[],
            name:'',
            owner:'',
            products:[],
            description:'',
            image:'',
            category:'',
            comments:[],
            subject: '',
            the_comment: '',
        
        }
    },
    created: function(){
        this.getCategories()
    },
    methods:{
    newCategory: function(){
      const {token, URL} = this.$route.query
      console.log(this.name)
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
        this.name = ''
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
    deleteCategory: function(event){
        const {token, URL} = this.$route.query;
        const id = event.target.id;

        fetch(`${URL}/api/categories/${id}/`, {
            method: "delete",
            headers: {
                authorization: `JWT ${token}`,
            },
        })
        .then(() => {
            this.getCategories();
        })
    },
    getProducts: function(event){
        const {token, URL} = this.$route.query
        const id = event.target.id
        
        fetch(`${URL}/api/categories/${id}/products`, {
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
    deleteProduct: function(event){
        const {token, URL} = this.$route.query;
        const id = event.target.id;
        const category= event.target.category;

        fetch(`${URL}/api/products/${id}/`, {
            method: "delete",
            headers: {
                authorization: `JWT ${token}`,
            },
        })
        .then(() => {
            this.getProducts({target:{id:category}});
        })
    },
    newProduct: function(){
      const {token, URL} = this.$route.query
      fetch(`${URL}/api/products/`, {
        method: 'post',
        headers: {
           "Content-Type": "application/json", 
            authorization: `JWT ${token}`
        },
        body: JSON.stringify({ image: this.image}, {description:this.description})
      })
      .then(() => {
        this.getProducts()
        this.image = '',
        this.description =''
      })
      .catch(err =>
       console.log(err)
      )
    },    
    getComments: function(event){
        const {token, URL} = this.$route.query
        const id = event.target.id
        
        fetch(`${URL}/api/products/${id}`, {
            method: 'get',
            headers: {
                authorization: `JWT ${token}`,
            }
        })
        .then((response) => response.json())
        .then((data) => {
            this.comments = data
            console.log(data)
        })
    },
    newComment: function(){
      const {token, URL} = this.$route.query
      console.log(this.the_comment)
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
        this.name = ''
      })
      .catch(err =>
       console.log(err)
      );
    }

    }
}
</script>
<style>
#decorative_image{
    background-image:url(https://res.cloudinary.com/g31ssa/image/upload/c_scale,w_1800/v1600108797/Screen_Shot_2020-09-14_at_2.39.30_PM_wvwi6p.png);
    height: 200px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 0px;
}
#h2_shopping_main{
    color:#232653;
    font-size: 30px;
    margin:20px;

} 
#h2_shopping{
    color:#232653;
    font-size: 20px;
    margin:20px;
}
li{
    width:320px;
    border-radius: 8px;
    padding: 8px;
    color: white;
    text-align: center;
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
.category_buttons{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: center;
}
.is-info{
    margin:10px;
}
#lista{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:20px;
    box-shadow: 2px 2px 4px #000000;
    padding:16px;
    
}
.container_products{
    color:#232653;
}
.products_list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

}
#actual-list{
    margin: 20px;
}
#image_product{
    height: 480px;
    border: solid  #AC88BF  10px;
    background-color: #AC88BF;

}
.edit{
    width:96px;
}
.adding_product{
    display:flex;
    flex-direction: column;
    width:auto;
    margin-right: 16px;
    
}
.creating_products{
    width: auto;
    padding:10px;
}
.deleting_button_category{
    width:100px;

}
img{
    height:300px ;
}
.div_of_comments{
    margin:20px;
    box-shadow: 2px 2px 4px #000000;
    color:grey;
}
.comments{
    padding:10px;
}


</style>