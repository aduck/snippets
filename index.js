const readline = require('readline')
const fs = require('fs')
const path = require('path')

let ios = process.argv.slice(2)
if (ios.length < 2) {
  console.log('请填写转换文件夹和输出路径')
  process.exit(1)
}
let result = {}
// 执行转换操作
const trans = file => {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error('文件不存在'))
    let filepath = path.join(ios[0], '/', file)
    let prefix = path.basename(filepath).split('.')[0]
    let rl = readline.createInterface({
      input: fs.createReadStream(filepath)
    })
    let body = []
    rl.on('line', data => body.push(data))
    rl.on('close', () => {
      result[prefix] = {
        prefix,
        body,
        description: prefix
      }
      resolve()
    })
  })
}

fs.readdir(ios[0], async (e, files) => {
  if (e) throw e
  await Promise.all(files.map(file => trans(file)))
  fs.writeFile(ios[1], JSON.stringify(result), e => {
    if (e) throw e
    console.log('转换完成')
  })
})
