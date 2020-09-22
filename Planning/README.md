# Project Overview

## Project Link
- [Link]()

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Done 
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Done
|Day 2| Working RestAPI | Done
|Day 3| Core Application Structure (HTML, CSS, etc.) | Done
|Day 4| MVP | Done
|Day 5| Final Touches/Presentation | Done

## Project Description
For the last project I will be creating a catalog/blog for handmade crafts. Users will login and sign up with a custom username and password. Inspired by my sister's brand Fantasy Foami I've decided to create a live magazine or a plattform that will allow users to display their producucts, and later on for users to request prices. As well as, allowing the community to interact with each other by leaving reviews on each product. User will be able to create their own categories and products but an active account is a must. For post MVP users will be able to create their own tutorials.  

## Google Sheet
[Google Sheet](https://docs.google.com/spreadsheets/d/1MiYUM5Rr0hr_9kbYVNgYzxu88jngsMA9udl1Ox-z7Vw/edit#gid=0) 

## Wireframes

- [Mobile version /Tablet - Landing Page](https://res.cloudinary.com/g31ssa/image/upload/v1600059423/landing-page-mobile_ua58sv.png)
- [Mobile version /Tablet - Login/Signup](https://res.cloudinary.com/g31ssa/image/upload/v1600061003/login-signup_mobile_eo1aut.png)
- [Mobile version /Tablet - Products Display-user](https://res.cloudinary.com/g31ssa/image/upload/v1600060830/user_and_non-user_mobile_vaik52.png)
- [Mobile version/Tablet - Products Display-nonuser](https://res.cloudinary.com/g31ssa/image/upload/v1600060830/user_and_non-user_mobile_vaik52.png,
https://res.cloudinary.com/g31ssa/image/upload/v1600060830/nonuser-mobile_mkgkqu.png)

- [Desktop - Landing Page](https://res.cloudinary.com/g31ssa/image/upload/v1600059429/landingpage-desktop_sijhiq.png)
- [Desktop - Login/Signup](https://res.cloudinary.com/g31ssa/image/upload/v1600059430/login-signup-desktop_gjjz5n.png)
- [Desktop - Products Display(NON-user)](https://res.cloudinary.com/g31ssa/image/upload/v1600059756/nonuser-desktop_rttzng.png)
- [Desktop - Products Display(user)](https://res.cloudinary.com/g31ssa/image/upload/v1600060073/user-desktop-products_xaxyoj.png)
- [DESKTOP ONLY - Editor's version-part1](https://res.cloudinary.com/g31ssa/image/upload/v1600060110/editors-version-part1-products_j36iuf.png)
- [DESKTOP ONLY - Editor's version-part2](https://res.cloudinary.com/g31ssa/image/upload/v1600060110/editors-version-part2-products_ac913w.png)



## Time/Priority Matrix 

- [Matrix](https://res.cloudinary.com/g31ssa/image/upload/v1600071245/frontend_bvji3k.png)

### MVP/PostMVP - 5min

#### MVP
- Make hamburger menu
- Make it responsive to different screen sizes (mobile, tablet, and desktop)
- Render API on frontend application
- Comments section
- Buttons
- Deployment


#### PostMVP 
- Adding Social Media Icons
- Add button shadow effects
- Hover effects
- Creating Tutorials' Section


## Functional Components

#### MVP

| Letter | Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: | :---: |
| 1 | Wireframing | H | 5hr | 5hr |
| 2 | Hamburger Menu | H | 1hr | 0.5 |
| 3 | Landing Page/ Login-Signup / User and non-user/ Editor's HTML | H | 4hrs | 3hr |
| 4 | Landing CSS | H | 3hr | 1hr |
| 5 | Products CSS | H | 3hrs | 3hr |
| 6 | Login/signup CSS | H | 4hrs | 5hr |
| 7 | Vue Research/ test| H | 20hrs | 35hr |
| 8 | Buttons | H | 3hrs | 2hr |
| - | Total | - | 43hrs | 54 hrs |


| Letter | Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: | :---: |
| A | Login HTML/CSS Debugging | H | 3hr| 1hr |
| B | Landing Page HTML/CSS Debugging | H | 3hr| 2hr |
| D | Products' page HTML/CSS Debugging | H | 3hr| 4hr |
| E | Testing | 2H | 3hrs |
| F | Deployment | 4H | 7hrs|
| - | Total | - | 15hr | 17hrs |

total: 58hrs

#### PostMVP
| Letter | Component | Priority | Estimated Time | Time Invested |
| --- | --- | :---: |  :---: | :---: |
| A | Hover effect | L | 1hr | hr |
| B | Social media icons | L | 3hrs | hr |
| C | Add button shadow effects | L | 3hrs | hr |
| D | Tutorials | L | 20hrs | hr |
| - | Total | - | 27hrs | 2hrs |

## Additional Libraries
- [Vue](https://vuejs.org)
- [jQuery](https://jquery.com/)

## Code Snippets

<div>
            <ul class="products_list">
                <li id="actual-list" v-for="product of products" v-bind:key="product.id">
                    <div class="container_products">
                        <div id="image_product"><img :src="product.image" :alt="product.description "></div>
                        {{product.description}}
                    </div>
                    <!-- <button class="edit button is-primary green"> Update</button> -->
                        <div class="inputs_for_comments">
                            <b-input v-model="subject" value="subject" placeholder="Subject" ></b-input>
                            <b-input v-model="the_comment" value="review" placeholder="Leave a Review"></b-input>
                        </div>
                        <button class="edit button is-primary" v-bind:id="product.id"  @click="newComment" >Add Review</button>
                        <button class="edit button is-primary" v-bind:id="product.id" v-bind:category="product.category" @click="deleteProduct" >Delete</button>
                    <!-- <button class="edit button is-primary"  @click="getComments">Comments</button> -->
                    <ul>
                        <li  v-for="comment of product.comments" v-bind:key="comment.id">
                            <div class="div_of_comments">
                            <p class="comments" >{{comment.the_comment}} <br/> <b>-{{comment.owner}}</b></p>
                            <button class="edit button is-primary" v-bind:id="comment.id" @click="deleteComment">Delete</button>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

**ERROR**:    
- Module not foun 
- Cannot read specific URL 
- Something defined but not use 

**RESOLUTION**: 
- Carefully Reviewing sintax. Extra letters, urls paths, extra parentheses, etc. 
- Adding v-bind in the rigth places 