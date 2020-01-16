<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator';
  import { State, Getter, Action, Mutation, namespace } from 'vuex-class';

  @Component
  export default class App extends Vue {
  }
</script>

<style>
  body {
    margin: 0;
  }
  .avue-upload__avatar {
    height: auto !important;
  }
</style>
