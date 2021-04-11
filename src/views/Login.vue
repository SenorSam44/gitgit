<template>
  <div class="about">
    <h1>Login with github</h1>

    <button @click="loginWithGithub">Login with github </button>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    async loginWithGithub(){
      let url = "https://cors-anywhere.herokuapp.com/"+process.env.VUE_APP_GITHUB_API+"?client_id="+process.env.VUE_APP_GITHUB_CLIENT_ID+"&redirect_uri="+process.env.VUE_APP_GITHUB_API_CALLBACK

      // let url = "https://localhost:8080/login/oauth/authorize"+"?client_id="+process.env.VUE_APP_GITHUB_CLIENT_ID+"&redirect_uri="+process.env.VUE_APP_GITHUB_API_CALLBACK


      await axios.get(url,{
        useCredentails: true,
      }).then( response =>{
        console.log(response);
      })

      // let url = 'https://github.com/login/device/code';
      // let data = {
      //   client_id: process.env.VUE_APP_GITHUB_CLIENT_ID
      // }
      //
      // axios.post(url, data).then( response => {
      //   console.log(response);
      // })
    }
  }
}
</script>

<style lang="scss">

</style>
