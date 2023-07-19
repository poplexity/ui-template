<template>
  <div id="q-app">
    <h1>NETWORK: {{ network }}</h1>
  </div>
</template>
<script>
export default {
  name: 'App',
    data() {
      return {
        network: process.env.NETWORK
      };
    },
}
</script>
