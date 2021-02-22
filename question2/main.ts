export function findOutlier(integers: number[]):number {
  let oddArr: number[] = [];
  let evenArr: number[] = [];
  integers.forEach((item: number) => {
    if (item % 2 === 0) {
      evenArr.push(item)
    } else {
      oddArr.push(item)
    }
  })
  return (oddArr.length > evenArr.length ? evenArr[0] : oddArr[0])
}