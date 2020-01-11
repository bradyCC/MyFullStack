<template>
  <div id="resource-crud">
    <avue-crud :data="data.data" :option="option" @row-save="save" @row-update="update" @row-del="remove" v-if="option.column"></avue-crud>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation, namespace} from 'vuex-class';

  @Component
  export default class ResourceCrud extends Vue {
    // data
    // 课程列表基础数据
    public data: any = {};
    // 配置表格数据列
    public option: any = {};

    // props
    //
    @Prop({type: String, required: true}) private resource!: string;

    // created
    public created(): void {
      this.getCourseListOption();
      this.getCourseList();
    }

    // methods
    // 获取课程列表配置
    public async getCourseListOption(): Promise<void> {
      const res = await this.$http.get(`${this.resource}/option`);
      this.option = res.data;
    }
    // 获取课程列表
    public async getCourseList(): Promise<void> {
      const res = await this.$http.get(`${this.resource}`);
      this.data = res.data;
    }
    // 新增
    public async save(row: any, done: any, loading: any): Promise<void> {
      await this.$http.post(`${this.resource}`, row);
      this.$message.success('创建成功!');
      this.getCourseList();
      done();
    }
    // 编辑
    public async update(row: any, index: any, done: any, loading: any): Promise<void> {
      const data: any = JSON.parse(JSON.stringify(row));
      delete data.$index;
      await this.$http.put(`${this.resource}/${row._id}`, data);
      this.$message.success('更新成功!');
      this.getCourseList();
      done();
    }
    // 删除
    public async remove(row: any, index: any): Promise<void> {
      try {
        await this.$confirm('是否确认删除?');
      } catch (e) {
        return;
      }
      await this.$http.delete(`${this.resource}/${row._id}`);
      this.$message.success('删除成功!');
      this.getCourseList();
    }
  }
</script>

<style scoped lang="scss">
</style>
