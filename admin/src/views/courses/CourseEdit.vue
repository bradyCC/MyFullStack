<template>
  <div id="course-edit">
    <h3>{{ isEdit ? '编辑' : '创建' }}课程</h3>
    <ele-form v-model="data" :form-desc="fields" :request-fn="submit"></ele-form>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation, namespace} from 'vuex-class';

  @Component
  export default class CourseEdit extends Vue {
    // data
    // 课程表单基础数据
    public data: any = {};
    // 课程表单字段
    public fields: any = {
      name: { label: '课程名称', type: 'input' },
      cover: { label: '封面图', type: 'input' }  ,
    };

    // props
    // 课程Id
    @Prop({type: String, required: false}) private id!: string;

    // created
    public created(): any {
      return this.isEdit && this.getCourse(this.id);
    }

    // computed
    get isEdit(): boolean {
      return !!this.id;
    }

    // methods
    // 获取数据
    public async getCourse(id: string): Promise<void> {
      const res: any = await this.$http.get(`courses/${id}`);
      this.data = res.data;
    }
    // 提交
    public async submit(data: any): Promise<void> {
      const url: string = this.isEdit ? `courses/${this.id}` : 'courses';
      const method: string = this.isEdit ? 'put' : 'post';
      await (this.$http as any)[method](url, data);
      this.$message.success('保存成功!');
      this.data = {};
      this.$router.go(-1);
    }
  }
</script>

<style scoped lang="scss">
</style>
