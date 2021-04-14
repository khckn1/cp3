<template>
  <div>
  <div class='post_' v-for="post in posts" :key="post.id">
    <div class='picture'>
      <img :src="'/images/'+post.images[1]" style='width: 100%'/>
    </div>
      <h2>{{post.title}}</h2>
      <div id="text"></div>
      <p>{{post.text[0]}}...</p>
      <router-link to="/Post" @mouseover.native="setId(post)" :post="post">
        <p>read more...</p>
        </router-link>
  </div>
  </div>
</template>

<script>
  export default {
    name: "Preview",
    props:{
      posts:Array,
    },
    methods:{
      setId(post) {
        console.log(post);
        this.$root.$data.postId.splice(0,1);
        this.$root.$data.postId.push(post.id);
    },
    },
  };
</script>

  <style scoped>
    h2 {
      font-family: 'Anton', sans-serif;
    }

    .post_ {
      border: solid 5px #454545;
      padding: 5px;
      width: 100%;
      background-color: #efe6dd;
    }

    .post_ .picture img {
      border: solid 2px #454545;
    }

    .link:visited, .link:link {
      color: #222222;
    }

    p {
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 1.4em
    }
    </style>
