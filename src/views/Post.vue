<template>
  <div>
    <title>{{post.title}}</title>

    <div class='header'>
      <img id='headPic' :src="'/images/'+post.images[0]" style='width: 100%' :alt='post.imagesLoc[0]'/>
      <div class='page-title'>
        <h1>{{post.title}}</h1>
      </div>
    </div>

    <div class='content'>
      <div class='post_' v-for="(item,index) in post.text" :key="index">
        <div class='picture'>
          <img :src="'/images/'+post.images[index+2]" :alt='post.imagesLoc[index+2]'/>
        </div>
      <p class='text'>{{post.text[index]}}</p>
      </div>
      </div>

      <div class='comments'>
      <h3>Add a Comment</h3>
      <form v-on:submit.prevent="addComment">
        <input v-model="addedName" placeholder="Name">
        <br/>
        <textarea v-model="addedComment"></textarea>
        <br />
        <button type="submit" @click="addComment(post)">Comment</button>
      </form>
      <h3>Comments</h3>
      <div v-for="comment in this.$root.$data.comments[post.id]" :key="comment.id">
        <hr>
        <p>{{comment.text}}</p>
        <p><i>-- {{comment.author}}</i></p>
      </div>
      </div>
  </div>
</template>

<script>
  import { uuid } from 'vue-uuid';
  export default {
    name: "Post",
    mounted () {
  },
  components: {
  },
  computed: {
  },
    data(){
      return{
        post: null,
        addedName: '',
        addedComment: '',
      }
    },
    created(){
      // console.log(this.$root.$data);
      this.post = this.$root.$data.posts[this.$root.$data.postId];
    },
    methods:{
      addComment(post) {
      if (!this.$root.$data.comments[post.id])
        this.$root.$data.comments[post.id] = [];
      this.$root.$data.comments[post.id].push({
        id: uuid.v4(),
        author: this.addedName,
        text: this.addedComment,
      });
      console.log(this.$root.$data.comments);
      this.addedName = '';
      this.addedComment = '';
    },
    },
  };
</script>

<style scoped>
h2 {
  font-family: 'Anton', sans-serif;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  max-width: 200px;
}

button {
  width: 100px;
}

.content {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.link:visited, .link:link {
  color: #222222;
}

p {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.4em
}

textarea {
    width: 100%;
    max-width: 500px;
    height: 100px;
}

@media only screen and (max-width: 500px) {
  .content {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .post_{
    display: flex;
    flex-direction: row-reverse;
    text: wrap;
    padding: 5px;
    width: 100%;
    background-color: #efe6dd;
  }

  .comments {
    padding: 5px;
    width: 100%;
    background-color: #efe6dd;
  }

  .post_ .picture {
    float: right;
    width: 50%;
    justify-content: center;
    padding-top: 25px;
  }

  .post_ .picture img {
    border: solid 2px #454545;
    float: right;
    justify-content: center;
    max-width: 100%;
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

  .post_{
    display: flex;
    flex-direction: row-reverse;
    text: wrap;
    padding: 5px;
    width: 100%;
    background-color: #efe6dd;
  }

  .comments {
    padding: 5px;
    width: 100%;
    background-color: #efe6dd;
  }

  .post_ .picture {
    float: right;
    justify-content: center;
    max-width: 50%;
    padding-top: 25px;
  }

  .post_ .picture img {
    border: solid 2px #454545;
    float: right;
    justify-content: center;
    max-width: 100%;
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

  .post_ .picture img {
    border: solid 2px #454545;
    float: right;
    justify-content: center;
    max-width: 100%;
  }

  .page-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .post_{
    display: flex;
    flex-direction: row-reverse;
    text: wrap;
    padding: 5px;
    width: 70%;
    background-color: #efe6dd;
  }

  .comments {
    margin-left: 15%;
    padding: 5px;
    width: 70%;
    background-color: #efe6dd;
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
