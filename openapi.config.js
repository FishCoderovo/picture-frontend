import { generateService } from '@umijs/openapi'

generateService({
  requestLibPath: "import request from '@/request'",
  schemaPath: 'http://localhost:8123/api/v2/api-docs', //参考我们项目的后端的接口文档
  serversPath: './src',  //生成的代码放在哪里
})
