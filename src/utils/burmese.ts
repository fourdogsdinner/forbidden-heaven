export const convertToBurmeseNumber = (num: number) => {
  const numbers = ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"];

  return num
    .toString()
    .split("")
    .map((e) => numbers[Number(e)])
    .join("");
};
