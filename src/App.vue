<template>
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <Navbar brandName="Portafolio" />
  <router-view />
  <div>
    <header></header>
    <main></main>
    <footer-component></footer-component>
  </div>
    </div>
    <div id="app"></div>
  </body>
</html>
</template>
<script>
  import Navbar from '../src/components/Navbar/index.vue';
  import FooterComponent from '../src/components/Footer/Footer.vue';

  export default({
    components: {
      Navbar,
      FooterComponent
    }
  })

</script>