<template>
  <div class="about">
    <h1>Login with github</h1>

    <button @click="loginWithGithub">Login with github </button>
    <div id="git-login-page"></div>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
import auth from '../lib/auth';
import pathJoin from 'path.join';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      isAuthenticated : false,
      userinfo :{
        username: null,
        avatar: null
      }
    }
  },
  methods: {
    async loginWithGithub() {
      const token = auth.getToken();
      let url = process.env.VUE_APP_GITHUB_API + "?client_id=" + process.env.VUE_APP_GITHUB_CLIENT_ID + "&redirect_uri=" + process.env.VUE_APP_GITHUB_API_CALLBACK

      // let url = "https://localhost:8080/login/oauth/authorize"+"?client_id="+process.env.VUE_APP_GITHUB_CLIENT_ID+"&redirect_uri="+process.env.VUE_APP_GITHUB_API_CALLBACK


      await axios.get(pathJoin('https://api.github.com', 'user'), {
        headers: {
          Authorization: `token ${token}`,
        },
      }).then((response) => {
        this.isAuthenticated = true;

        this.userInfo.username = response.data.login;
        this.userInfo.avatar = response.data.avatar_url;
      }).catch(() => {
        this.logout();
      });
    },
    logout(){
      this.isAuthenticated = false;
      auth.logout();
    }
  },
}
</script>

<style lang="scss">

</style>
