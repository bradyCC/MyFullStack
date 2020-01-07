<template>
  <div id="courses-list">
    <h3>课程列表</h3>
    <el-table :data="data.data" stripe>
      <el-table-column v-for="(field, name) in fields" :prop="name" :key="name" :label="field.label" :width="field.width" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation, namespace} from 'vuex-class';

  @Component
  export default class CoursesList extends Vue {
    // data
    public data: any = {};
    public fields: any = {
      _id: { label: 'ID' },
      name: { label: '课程名称' },
      cover: { label: '封面图' },
    };

    // create
    public created(): void {
      this.getCoursesList();
    }

    // methods
    // 获取课程列表
    public async getCoursesList(): Promise<void> {
      const res = await this.$http.get('courses');
      this.data = res.data;
    }
  }
</script>

<style scoped lang="scss">

</style>
