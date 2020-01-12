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


#### **服务器配置**
1. 购买云服务器 - 阿里云、百度云
2. 购买运行域名
3. 域名解析
4. 配置服务器 

```shell
# 连接服务器
ssh root@106.12.201.27(域名解析后，可以使用域名连接: ssh root@www.bradycc.com)

# 输入密码

# 更新apt包管理器
apt update

# 查看ningx
apt show nginx

# 安装ningx
apt install nginx -y

# 查看mongodb客户端
apt show mongodb

# 查看mongdb服务端
apt show mongodb-server

# 安装mongodb
apt install mongodb-server -y

# 安装git
apt install git -y

# 安装nodejs
apt install nodejs -y

# 安装npm
apt install npm -y

# 配置淘宝镜像
npm config set registry https://registry.npm.taobao.org

# 安装nrm
npm i -g nrm

# 安装n(node升级包)
npm i -g n

# 升级nodejs
n latest

# 安装git
apt install git -y

```



