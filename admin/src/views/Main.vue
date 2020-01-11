<template>
  <div id="main">
    <el-container>
      <el-aside width="200px">
        <el-menu :default-active="$route.path" mode="vertical" router style="height: 100vh;">
          <el-submenu v-for="(item, index) in menu.items" :index="`menu-item-${index}`" :key="`menu-item-${index}`">
            <template slot="title">{{ item.title }}</template>
            <el-menu-item v-for="(subItem, subIndex) in item.items" :index="subItem.path" :key="`menu-item-${index}-${subIndex}`">{{ subItem.title }}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <h3>Node.js + Vue.js 全栈项目后台管理系统</h3>
        </el-header>
        <el-main>
          <!-- :key="$route.path" 标识唯一键，防止数据不更新 -->
          <router-view :key="$route.path" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation, namespace} from 'vuex-class';

  @Component
  export default class Main extends Vue {
    // data
    public menu: any = {
      items: [
        {
          title: '内容管理',
          items: [
            { title: '首页', path: '/' },
            { title: '课程管理', path: '/courses/list' },
            { title: '课时管理', path: '/episodes/list' },
          ],
        },
        {
          title: '运营管理',
          items: [
            { title: '用户管理', path: '/users/list' },
          ],
        },
      ],
    };

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
