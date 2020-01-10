<template>
  <div id="user-list">
    <h3>用户列表</h3>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation, namespace} from 'vuex-class';

  @Component
  export default class UserList extends Vue {
    // data
    public msg: string = 'Hello World';

    // props
    @Prop() private name!: string;

    // watch
    @Watch('msg')
    public onMsgChanged(val: string, oldVal: string): string {
      return val;
    }

    // mounted
    public mounted(): void {
      this.changeMsg();
    }

    // computed
    get computedMsg(): string {
      return this.msg;
    }

    // methods
    public changeMsg(): void {
      this.msg = 'Welcome to China';
    }
  }
</script>

<style scoped lang="scss">

</style>
