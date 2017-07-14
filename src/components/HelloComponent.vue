<template>
  <div>
    <h1>{{namahello}}</h1>
    <p>Greeting Fungsi {{greetingHello()}}</p>
    <p>Greeting Computed {{dataComputedHello}}</p>
    <p class="teks_sampel">Hello World Dengan Teks Style</p>
  </div>
</template>
<script>
  export default {
    name: 'hello-world-vue',
    data() {
      return {
        namahello: 'hello world component vue js',
      };
    },
    methods: {
      greetingHello() {
        return 'Hello World pakai komponen file .vue';
      },
    },
    computed: {
      dataComputedHello() {
        return 'Computed property Hello World';
      },
    },
  };
</script>
<style>
  .teks_sampel {
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif
  }
</style>
