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
      let url = process.env.VUE_APP_GITHUB_API+"?client_id="+process.env.VUE_APP_GITHUB_CLIENT_ID+"&redirect_uri="+process.env.VUE_APP_GITHUB_API_CALLBACK
      // console.log(process.env.VUE_APP_GITHUB_API)
      // axios.get(url).then( response =>{
      //   console.log(response);
      // })

      const config = {
        crossdomain: true,
        baseURL: 'http://localhost:8080',
        timeout: 10000,
        withCredentials: true,
        // transformRequest: [(data) => JSON.stringify(data.data)],
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        }

      }

      await axios.get(url, config).then( response =>{
        console.log(response);
      })
    }
  }
}
</script>

<style lang="scss">

</style>
