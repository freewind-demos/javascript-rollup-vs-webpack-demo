JavaScript Rollup vs Webpack Demo
=================================

Rollup和Webpack都是打包工具。在Webpack已经快一统江湖的时候，为什么还有人愿意使用rollup呢？

我想原因是：有的时候，比如写一个js库，在所有东西可控的情况下，我们只需要生成紧凑单一的最终文件，不需要处理复杂的模块，这时使用rollup就很合适。

而webpack始终考虑周全，在生成的代码中包含很多在这种情况下就显得有点多虑。

这个Demo里同时使用rollup和webpack对同一份代码进行打包，看一下最终产生的代码就明白了。

```
npm install
npm run rollup
npm run webpack
```

将会生成`bundle-rollup.js`和`bundle-webpack.js`文件。

Resources
---------

- Rollup vs Webpack (JavaScript bundling in 2018): <https://medium.com/jsdownunder/rollup-vs-webpack-javascript-bundling-in-2018-b35758a2268>
- Webpack、Rollup相爱相杀的那些事: <https://www.w3ctech.com/topic/1996>