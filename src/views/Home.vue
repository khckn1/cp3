<template>
  <div>
  <div class='header'>
    <img src='/images/airplane.jpeg' style='width: 100%'/>
    <div class='page-title'>
      <h1>Traveling</h1>
    </div>
  </div>
  <div class='content'>
    <div class='post introduction'>
      <div class='text'>
        <h2>Introduction</h2>
        <p>At some point, just about everyone figures out that traveling isn’t
          difficult. You book a flight, hotel, and look up some things to do.
          Maybe you buy a package and everything is planned for you. You go,
          see the top sights, then leave. It’s instagramable and you see some
          pretty cool things. But, this never seemed enough to me. For some
          reason, my parents didn’t like the feeling of being a tourist. So,
          growing up, I never really got the chance. The first time we left
          the country was for 5 months. The second time I left was 2 years.
          The next time was 5 months again. The point was really seeing the
          country, experiencing the culture, speaking some of the language,
          and eating the food. This blog is to talk about the experiences
          trying to experience the culture during traveling, instead of just
          the beaches or restaurants or “top 10 destinations”. </p>
      </div>
    </div>
    <div class='post preview'>
    <Preview :posts="posts"/>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Preview from "../components/Preview.vue";
export default {
  name: "Home",
  components: {
    Preview,
  },
  computed: {
    posts() {
      return this.$root.$data.posts;
    },
  }
};
</script>

<style scoped>
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    background-color: #454545;
  }

  h2 {
    font-family: 'Anton', sans-serif;
  }

  p {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.4em
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
    background-color: #efe6dd;
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
