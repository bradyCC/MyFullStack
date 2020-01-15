<template>
  <div id="resource-crud">
    <avue-crud :data="data.data" :option="option" :page="page" @row-save="save" @row-update="update" @row-del="remove" @on-load="changePage" @sort-change="changeSort" v-if="option.column"></avue-crud>
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
    // 分页配置基础数据
    public page: any = {
      total: 0,                 // 总条数
      pageSize: 10,             // 每页条数
      pageSizes: [2, 5, 10],    // 每页条数配置
    };
    // 分页查询条件基础数据
    public query: any = {};

    // props
    // 模块资源地址
    @Prop({type: String, required: true}) private resource!: string;

    // created
    public created(): void {
      this.getCourseListOption();
    }

    // methods
    // 获取课程列表配置
    public async getCourseListOption(): Promise<void> {
      const res = await this.$http.get(`${this.resource}/option`);
      this.option = res.data;
    }
    // 获取课程列表
    public async getCourseList(): Promise<void> {
      const res = await this.$http.get(`${this.resource}`, { params: { query: this.query } });
      this.page.total = res.data.total;
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
    /**
     * 分页
     * @param currentPage 当前页
     * @param pageSize 每页条数
     */
    public async changePage({currentPage, pageSize}: any): Promise<void> {
      this.query.page = currentPage;
      this.query.limit = pageSize;
      this.getCourseList();
    }
    /**
     * 排序
     * @param prop 排序字段
     * @param order 排序类型 ascending-正序 descending-倒序 null-无排序
     */
    public async changeSort({prop, order}: any): Promise<void> {
      this.query.sort = !order ? null : { [prop]: order === 'ascending' ? 1 : -1 };
      this.getCourseList();
    }
  }
</script>

<style scoped lang="scss">
</style>
