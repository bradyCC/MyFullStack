<template>
  <div class="home">
    <h3>首页</h3>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation, namespace} from 'vuex-class';

  @Component
  export default class Home extends Vue {
  }
</script>

<style scoped lang="scss">
</style>
