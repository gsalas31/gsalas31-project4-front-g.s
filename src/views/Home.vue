<template>
    <div class="home">
        <div id="intro_landing_page_first_part">
            <div id="first_content">
                    <h1 class="name_of_app">FANTASY FOAMI</h1>
                    <h2 class="slogan">Create</h2>
                    <h2 class="slogan">Share</h2>
                    <h2 class="slogan">Enjoy</h2>
                    <p id="description_intro"> A place were you can display your work and reach happy clients!</p>
            </div>
        </div>

        <div id="intro_sencond_part">
            <div class="second_part_benefits">
                <div id="characteristic_one">
                    <h2>Have your products displayed and ready for others to see </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem cumque repellat vitae illum labore sunt dignissimos! .</p>
                </div>
                <div id="image_description_one">
                </div>
            </div>

            <div class="second_part_benefits" id="second">
                <div id="image_description_two">
                </div>
                <div id="characteristic_two">
                    <h2>Share your thougths with a big community</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem cumque repellat vitae illum labore sunt dignissimos! .</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style>
#intro_landing_page_first_part{
    background-image: url(https://res.cloudinary.com/g31ssa/image/upload/v1600108797/Screen_Shot_2020-09-14_at_2.39.30_PM_wvwi6p.png) ;
    width: 100%;
    height: 40%;
    background-position: center;
    object-fit: cover;
    padding: 20px 0px;
    background-repeat: no-repeat;
    margin-top: 0px ;
    display: flex;
    justify-content: center;
}
#first_content{
    background-color: RGBA(256, 256, 256, 0.5);
    width: 60%;
    height: auto;
    padding:20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

}
.name_of_app{
    font-size: 36px;
    color: #ffffff;
}
.slogan{
    color:#ffffff;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}
#description_intro{
    color:#ffffff;
    font-size: 16px ;
}
/* SECOND PART------- */
#intro_sencond_part{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: center;
    margin-bottom: 40px;
}
h2{
    font-size: 18px;
}
.second_part_benefits{
    display: flex;
    flex-direction: row-reverse;
    height: auto;
    margin-top: 30px;
}

#characteristic_one, #characteristic_two {
    width: 50%;
    height: auto;
    margin: 20px;
    border-radius: 10px;
    border: black solid 2px;
    padding: 10px;
    box-shadow: 2px 2px 4px #000000;
    margin-left: auto;
    margin-right: auto;
}
#image_description_one{
    /* background-image: url(https://res.cloudinary.com/g31ssa/image/upload/v1600114096/free-delivery-truck-icon-2049-thumb_krwl8d.png); */
    background-image: url(https://res.cloudinary.com/g31ssa/image/upload/c_scale,h_300/v1600118759/free-delivery-truck-icon-2049-thumb_berl37.png);
    width: 280px;
    height: 140px;
    background-position: center;
    margin:10px;
    padding:10px;
    background-repeat: no-repeat;
}
#image_description_two{
    /* background-image: url(https://res.cloudinary.com/g31ssa/image/upload/v1600114096/886652_paint_512x512_py4tjy.png); */
    background-image: url(https://res.cloudinary.com/g31ssa/image/upload/c_scale,w_200/v1600114096/886652_paint_512x512_py4tjy.png);
    width: 200px;
    height: 200px;
    background-position: center;
    margin:20px;
    padding:10px;
    background-repeat: no-repeat;
}
.home{
    width: 100%;
}

</style>