<template>
  <div id="course-list">
    <h3>课程列表</h3>
    <div>
      <el-button type="primary" size="small" @click="$router.push('/courses/courseCreate')">创建课程</el-button>
    </div>
    <el-table :data="data.data" stripe>
      <el-table-column v-for="(field, name) in fields" :prop="name" :key="name" :label="field.label" :width="field.width" align="center"></el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template v-slot="{row}">
          <el-button type="success" size="small" @click="$router.push(`/courses/courseEdit/${row._id}`)">编辑</el-button>
          <el-button type="danger" size="small" @click="remove(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation, namespace} from 'vuex-class';

  @Component
  export default class CourseList extends Vue {
    // data
    // 课程列表基础数据
    public data: any = {};
    // 课程列表字段
    public fields: any = {
      _id: { label: 'ID' },
      name: { label: '课程名称' },
      cover: { label: '封面图' },
    };

    // create
    public created(): void {
      this.getCourseList();
    }

    // methods
    // 获取课程列表
    public async getCourseList(): Promise<void> {
      const res = await this.$http.get('courses');
      this.data = res.data;
    }
    // 删除课程
    public async remove(row: any): Promise<void> {
      try {
        await this.$confirm('是否确认删除?');
      } catch (e) {
        return;
      }
      await this.$http.delete(`courses/${row._id}`);
      this.$message.success('删除成功!');
      this.getCourseList();
    }
  }
</script>

<style scoped lang="scss">
</style>
