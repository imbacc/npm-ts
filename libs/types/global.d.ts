export type a = string
export type b = number
export interface c {
  [key: string]: a | b
  testA: a
  testB: a | b
}
