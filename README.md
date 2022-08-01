### START

1. 安装依赖 `yarn install`
2. 生成必要的 code `yarn codegen`
3. 验证签名？ `yarn auth`
4. 部署 `yarn deploy`

### ABI

##### AzukiToken
- Address: 0xed5af388653567af2f388e6224dc7c4b3241c544
- 需要记录的事件：
    - Transfer: 有人交易 Token;
    - Mint: 第一次 mint Token;

### 注意事项

1. `src` 中每个文件的函数方法都需要有调用的地方，每个函数都需要声明类型，否则会部署失败.
2. `handler` 中的函数不能使用箭头函数，否则部署失败，提示是函数找不到
3. 代码中不能有 `console.log`
