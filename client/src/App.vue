<template>
  <div id="app">
    <h1>My App</h1>
    <p>Thr server said: {{serverMessage}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){
    fetch("http://localhost:3000")
    .then(response => response.json())
    .then(data => this.serverMessage = data.message)
},
  data () {
    return {
        serverMessage: ""
      }

    }
}
</script>

<style>

</style>
