<template>
  <div id="non_member">
        <!-- <div id="decorative_image"></div> -->
        <h2 id="h2_shopping">Shop by Category</h2>
        <div class="shopping_by_category">
          <ul id="options_products">
            <li id="school">Back to School</li>
            <li id="home">Home Decor</li>
            <li id="christmas">Christmas</li>
            <li id="birthday">Birthdays</li>
            <li id="other">Other Occassions</li>
          </ul>
        </div>
        <div id="products_container">
        </div>
  </div>
</template>

<script>
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
</style>