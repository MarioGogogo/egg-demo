FROM node:14-alpine
# 在容器中创建一个 /app 目录，作为工作目录
WORKDIR /app  
# 复制 package.json 文件到容器中
COPY package.json . 
# 安装生产依赖项
RUN npm install

COPY . . 
# 暴露容器的 7001 端口
EXPOSE 7001  
# 在容器中运行 npm start 命令启动应用程序
CMD npm run dev 

