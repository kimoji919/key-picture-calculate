# RSA-WEB

### 团队介绍
> 徐明威同学完成科学计算器的功能实现及UI设计、附加项目前端界面的设计、路由设计实现
> 李越鹏同学完成附加项目核心功能的算法实现、附加项目后端设计

### 项目介绍
> 我们的计算器包括基础科学计算器、公钥私钥生成计算器、图片密码生成计算器、文件加密解密计算器四大部分，其核心功能均围绕各种加密解密算法实现
> 通过Vue框架实现前端设计
> 通过nodejs实现算法核心功能
> 通过Koa实现后端设计
> 公钥私钥生成计算器通过JS相关包进行实现，上传公钥转换生成私钥，也可上传私钥生成公钥
> 图片生成密码通过调用JS中Base64与MD5码实现，上传图片与Key，后台根据图片与Key生成唯一密码
> 文件加密解密计算器是一个根据des rsa加密构建的加密系统，上传文件后根据给定Key进行des→rsa加密,解密rsa→des

### 项目操作



#### **项目启动**

```shell
npm run serve
```
#### **启动后台项目**

```shell
cd server
$env:NODE_OPTIONS="--openssl-legacy-provider"
node main.js
```

#### **打包**

```shell
npm run build
```

#### 

#### 项目目录

```shell
src
|
|── server  			后台 
|── axios   
│	└── http.js			请求封装
|── components  			  
│	|── Generate.vue	生成key
|   |—— Secret.vue      密码
│	|── Decrypt.vue		解密
│	└── Encrypt.vue		加密
|── router  				 
|	└── /index.js		路由
|── views  			
|	└── /mode2.vue		功能面板
|   └── /cal.vue        计算器
|   └── /login.vue      主页面
|── main.js  			主函数
└── App.vue  			vue入口

```

#### 后台目录

```shell
server
|
|- /pem     				密钥存放
|- /router  				路由  
	|- api.js					接口逻辑
|- /upload  				上传
	|- /decrypt					解密存放
	|- /decrypt					加密存放
|- main.js  				主函数
|- utils.js 				工具函数
```


### 后台操作


## 密钥操作

#### 生成密钥

**URL: `/generator`**

**Method: `GET`**

**Description: `生产密钥方法返回结果`**

**Response-example:**

```json
//json
{
    "code": 0,
    "msg": "创建密钥成功",
    "data": {
        "privatePem": "-----BEGIN RSA PRIVATE KEY-----\nMIIBOgIBAAJBAIGE54KgnYNCpBAkYvhFsn9rg0d9b6J5P8U444GgZ6Y7rBtRM13H\n6eDEdzDHDBG6xbGva+kx3aLXA3gDIac6TiECAwEAAQJAN1yEzKw0x797ez7iYvb/\ntkFRawRt7Efhfz6y2FylEUN6lHu/yx/0YQ5uP+f0lSRKIl29Ui4V5w6E0sgMQ6TB\nhQIhAPtxc8OewhvbveVWUnysibb19+RCLOOdDoCLgsj3cYxjAiEAg93L9gCx72J1\n6Wz0Xkro/z8YQ9XjPsoTqyGIrjC62KsCIQDqRTFL0O4f0KPkOoJOQN9qxU96r6Ft\nTNbHM7TeE5YK6wIgGtnyK1Cu6uDww6x1AjJcyYTuivmlwWZipOk6LMYtdesCIFyF\nebhYP4xROugWGMeTj387QVkSfeV1HNf4ilNYs8y9\n-----END RSA PRIVATE KEY-----",
        "publicPem": "-----BEGIN RSA PUBLIC KEY-----\nMEgCQQCBhOeCoJ2DQqQQJGL4RbJ/a4NHfW+ieT/FOOOBoGemO6wbUTNdx+ngxHcw\nxwwRusWxr2vpMd2i1wN4AyGnOk4hAgMBAAE=\n-----END RSA PUBLIC KEY-----"
    }
```

#### 获取key

**URL: `/getkey`**

**Method: `GET`**

**Description: `读取密钥返回内容 供富文本框使用`**

**Params:`空`**

**Response-example:**

```json
//json
{
    "code": 0,
    "data": {
        "privatePem": "-----BEGIN RSA PRIVATE KEY-----\nMIIBOgIBAAJBAIGE54KgnYNCpBAkYvhFsn9rg0d9b6J5P8U444GgZ6Y7rBtRM13H\n6eDEdzDHDBG6xbGva+kx3aLXA3gDIac6TiECAwEAAQJAN1yEzKw0x797ez7iYvb/\ntkFRawRt7Efhfz6y2FylEUN6lHu/yx/0YQ5uP+f0lSRKIl29Ui4V5w6E0sgMQ6TB\nhQIhAPtxc8OewhvbveVWUnysibb19+RCLOOdDoCLgsj3cYxjAiEAg93L9gCx72J1\n6Wz0Xkro/z8YQ9XjPsoTqyGIrjC62KsCIQDqRTFL0O4f0KPkOoJOQN9qxU96r6Ft\nTNbHM7TeE5YK6wIgGtnyK1Cu6uDww6x1AjJcyYTuivmlwWZipOk6LMYtdesCIFyF\nebhYP4xROugWGMeTj387QVkSfeV1HNf4ilNYs8y9\n-----END RSA PRIVATE KEY-----",
        "publicPem": "-----BEGIN RSA PUBLIC KEY-----\nMEgCQQCBhOeCoJ2DQqQQJGL4RbJ/a4NHfW+ieT/FOOOBoGemO6wbUTNdx+ngxHcw\nxwwRusWxr2vpMd2i1wN4AyGnOk4hAgMBAAE=\n-----END RSA PUBLIC KEY-----"
    }
}
```

#### 上传key

**URL: `/key/upload/:name`**

**Method: `POST`**

**Description: `根据接口的params上传密钥`**

**Params:`name:密钥文件名`**

**body:**

```json
{
    "name":"private.pem",
    "path":"D:\test.txt"
}
```

**Response-example:**

```json
//json
{
    code: 0
	msg: "替换private.pem成功"
}
```

#### 下载key

**URL: `/download/:name`**

**Method: `GET`**

**Description: `根据接口的params下载密钥`**


#### 修改key

**URL: `/key/modify`**

**Method: `POST`**

**Description: `修改密钥内容`**

**Params:`空`**

**body:**

```json
{
    "fileName":"private.pem",
    "key":"我是修改测试"
}
```

**Response-example:**

```json
//json
{
   "code": 0
   "msg": "替换private.pem成功"
}
```

## 加密


#### 通过路径加密

**URL: `/encrypt/path`**

**Method: `POST`**

**Description: ` 根据路径加密文件`**

**Params:`空`**

**body:**

```json
{
    "path":"C:\test.txt"
}
```

**Response-example:**

```json
//json
{
    "code": 0,
    "msg": "加密成功~"
}
```


#### 上传加密

**URL: `/encrypt/upload`**

**Method: `POST`**

**Description: `上传文件到指定路径后加密`**

**Params:`空`**

**formData**:

```json
{
    "frile":"test.txt"
}
```

**Response-example:**

```json
//json
{
    code: 0
	msg: "上传成功!"
	data: {
    	path: "C:\README.md", 
    	name:"README.md"
	}
}
```


#### 下载加密后的文件

**URL: `/download/encrypt/:name`**

**Method: `GET`**

**Description: `通过上个函数返回的文件名下载`**

**Params:`name:下载的文件名`**



## 解密


#### 通过路径解密

**URL: `/decrypt/path`**

**Method: `POST`**

**Description: ` 根据路径解密文件`**

**Params:`空`**

**body:**

```json
{
    "path":"C:\test.txt"
}
```

**Response-example:**

```json
//json
{
    "code": 0,
    "msg": "解密成功~"
}
```


#### 上传解密

**URL: `/decrypt/upload`**

**Method: `POST`**

**Description: `上传文件到指定路径后解密`**

**Params:`空`**

**formData**:

```json
{
    "frile":"test.txt"
}
```

**Response-example:**

```json
//json
{
    code: 0
	msg: "上传成功!"
	data: {
    	path: "C:\README.md", 
    	name:"README.md"
	}
}
```


## 密码

#### 图片密码

**URL: `/secret/upload`**

**Method: `POST`**

**Description: `上传图片到指定路径后生成密码`**

**Params:`空`**

**formData**:

```json
{
    "frile":"test.txt"
}
```

**Response-example:**

```json
//json
{
    code: 0
	msg: "上传成功!"
	data: {
    	name:"README.md",
        key:abcdefghijkl1234
	}
}
```