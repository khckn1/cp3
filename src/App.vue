<template>
  <div id="app">
  <title>Traveling Blog</title>
  <div>
    <b-navbar :style="myStyle" toggleable="lg" type="light">
        <b-navbar-brand :style="brand" href="#">Traveling</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="#">All Posts</b-nav-item>
            <b-nav-item href="#">Future Plans</b-nav-item>
            <b-nav-item href="#">Social Media</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        </b-navbar>
  </div>
<div :style="body">
  <router-view />
  </div>


  <div class='footer'>
    <div class='direct-contact'>
      <h3>Contact Information</h3>
      <p>Phone: <a class='link' href='tel:7205324077'>(720) 532-4077</a></p>
      <p>Email: <a class='link' href='mailto:khckn1@gmail.com'>khckn1@gmail.com</a></p>
    </div>
    <div class='social-media'>
      <h3>Social Media</h3>
      <p>Twitter: <a class='link' href='https://twitter.com/MyRoyalKainess'>@myroyalkainess</a></p>
      <p>Instagram: <a class='link' href='https://www.instagram.com/myroyalkainess/'>@myroyalkainess</a></p>
    </div>
    <div class='right-box'>
      <div class='other-links'>
        <h3>Other Links</h3>
        <p><a class='link' href='https://github.com/khckn1/cp3'>Github</a></p>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
//import Preview from "./components/Preview.vue"

Vue.use(BootstrapVue)
export default {

  data() {
       return{
         myStyle:{
            backgroundColor:"#449dd1",
            color:"#414141",
            fontFamily: "Noto Sans JP, sans-serif",
          },
          brand:{
            color: "#414141",
            fontFamily: "Satisfy, cursive",
          },
          body:{
            backgroundColor:"#454545",
          }
           }
         }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #414141 !important;
}

#nav {
  padding: 30px;
}

#nav a {
  }

#nav a.router-link-exact-active {
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  background-color: #454545;
}

.header h1 {
  font-family: 'Satisfy', cursive;
  color: #77966d;
	text-shadow: 2px 2px #454545;
}

h2 {
  font-family: 'Anton', sans-serif;
}

p {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.4em
}

.bg-dark {
  background-color: #449dd1 !important;
}
.navbar-expand-lg .navbar-nav .nav-link {
  color: #414141 !important;
  font-family: 'Noto Sans JP', sans-serif !important;
}

.navbar-expand-lg .navbar-nav .active .nav-link {
  color: #454545 !important;
  font-family: 'Noto Sans JP', sans-serif !important;
}

.content {
  display: flex;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
}

.post {
  border: solid 5px #454545;
  padding: 5px;
  width: 100%;
}

.text {
  float: left;
  width: auto;
}

.picture img {
  border: solid 2px #454545;
}

.header {
  position: relative;
  text-align: center;
  color: white;
  border-bottom: solid 15px #77966d;
}
.post {
  width: 100%;
  background-color: #efe6dd;
}

.page-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.direct-contact, .social-media, .right-box {
  padding: 5px;
}

.link:visited, .link:link {
  color: #222222;
}

@media only screen and (max-width: 500px) {
  .content {
    display: flex;
  	align-items: center;
  	flex-direction: row;
  	flex-wrap: wrap;
  }

  .post {
    border: solid 5px #454545;
    padding: 5px;
    width: 100%;
  }

  .picture {
    float: right;
    width: 50%;
    justify-content: center;
    padding-top: 25px;
  }

  .picture img {
    border: solid 2px #454545;
  }

  .header {
    position: relative;
    text-align: center;
    color: white;
    border-bottom: solid 15px #77966d;
  }

  .footer {
    background-color: #77966d;
    color: #222222;
  }

  .post {
    width: 100%;
    background-color: #efe6dd;
  }

  .page-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .direct-contact, .social-media, .right-box {
    padding: 5px;
  }
}

@media only screen and (min-width: 501px) and (max-width: 1000px) {
  .header {
    position: relative;
    text-align: center;
    max-height: 500px;
    border-bottom: solid 15px #77966d;
  }

  .header img {
    max-height: inherit;
    object-fit: cover;
    border-bottom: solid 15px #77966d;
  }

  .picture {
    float: right;
    max-width: 50%;
    justify-content: center;
    padding-top: 25px;
  }

  .page-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h1 {
    font-size: 8em;
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #77966d;
    color: #222222;
  }
}

@media only screen and (min-width: 1001px) {
  .header {
    position: relative;
    text-align: center;
    max-height: 500px;
    border-bottom: solid 15px #77966d;
  }

  .content {
    justify-content: center;
    align-content: center;
  }

  .header img {
    max-height: inherit;
    object-fit: cover;
    border-bottom: solid 15px #77966d;
  }

  .picture {
    float: right;
    max-width: 20%;
    justify-content: center;
    padding-top: 25px;
    padding-left: 10px;
  }

  .page-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .post {
    border: solid 5px #454545;
    padding: 5px;
    width: 70%;
  }

  h1 {
    font-size: 8em;
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #77966d;
    color: #222222;
  }
}
</style>
