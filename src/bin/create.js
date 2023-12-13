import { readFileSync, writeFileSync } from 'fs'

function create(args) {
  const { type, path } = args
  let temp = ''
  if(type === 'table') {
    temp = readFileSync('./src/bin/dist/table', 'utf-8') 
  } else {
    throw '当前仅支持生成 table 类型'
  }
  writeFileSync(path, temp)
  console.log('\n创建完成')
}

export default create

