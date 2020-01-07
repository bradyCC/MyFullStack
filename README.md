Node.js + Vue.js 全栈项目

> nest.js是一个渐进式的Node.js框架，用于构建高效，可靠和可扩展的服务器端应用程序。

```shell
# 全局安装
npm i -g @nestjs/cli

# 查看版本
nest -V

# 创建项目
nest new server

# 创建子项目
cd server
nest g app admin

# 启动监听子项目
nest start -w admin

# 创建功能模块
cd server
nest g lib db  
@libs

# 安装数据库模块
yarn add nestjs-typegoose @typegoose/typegoose
yarn add mongoose @types/mongoose

# 配置模型

# 子项目下创建模型、控制器
nest g mo -p admin users
nest g co -p admin users

# 安装 crud增删改查模块
yarn add nestjs-mongoose-crud

# 安装 swagger
yarn add @nestjs/swagger swagger-ui-express
```

