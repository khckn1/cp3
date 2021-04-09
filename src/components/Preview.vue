<template>
  <div class='post'>
    <div class='picture'>
      <img :src='getImg()' style='width: 100%'/>
    </div>
      <h2>{{title}}</h2>
      <p>{{text}}</p>
      <a :href='getLink()'>read more...</a>
  </div>
</template>

<script>
  export default {
    name: "Preview",
    props: {
      title: String,
      text: String,
      image: String,
      link: String,
    },
    methods: {
      getLink() {
        return this.link;
      },
      getImg() {
        return this.image;
      },
    }
  };
  </script>
