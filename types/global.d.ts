declare type a = string
declare type b = number
declare interface c {
  [key: string]: a | b
  testA: a
  testB: a | b
}
