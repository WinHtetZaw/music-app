// change second to readable string like 3:45
export const formatSecond = (num: number): string => {
  const min = Math.floor(num / 60);
  const sec = num % 60;

  return `${min}:${sec < 10 ? sec * 10 : sec}`;
  //   return `${min}:${sec}`;
};

export const changeToPercent = (num: number, totalNum: number): number => {
  const percent = (num / totalNum) * 100;
  return percent;
};

export const valueInSecond = (totalNum: number): number => {
  const value = totalNum / 100;
  return value;
};
