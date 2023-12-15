// 实现一个 Pick 方法
export type MPick<T, K extends keyof T> = {
  [P in K]: T[P]
}