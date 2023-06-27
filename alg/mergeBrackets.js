// 组合合法括号
function mergeBrackets(n) {
  let ln = 0, rn = 0, length = 2 * n;
  let resArr = []
  while(length) {
    // 左括号数 = n 结束
    if (ln === n) {
      // 加右括号
      ++rn
      // resArr.push(")")
    } else if (ln > rn) {
      // 左括号数 >= 右括号数
      // 加左括号
      ++ln
      resArr = resArr.map(item => {
        
      })
      resArr.push("(")
      // 加右括号
      ++rn
      resArr.push(")")
    } else {
      // 加左括号
      ++ln
      resArr.push("(")
    }
    --length
  }
  return resArr;
}

const res = mergeBrackets(3)

console.log(res)
