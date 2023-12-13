import create from './create'

// 使用 minimist 处理参数
const args = minimist(process.argv.slice(2))
try {
  create(args)
} catch(e) {
  console.log(e)
}