const nationalCode = (num) => {
  if (!num) return false;
  else {
    let strNum = num.toString();
    if (!strNum.match(/^\d{10}$/)) return false;
    strNum = ("0000" + strNum).substr(strNum.length + 4 - 10);
    if (parseInt(strNum.substr(3, 6), 10) === 0) return false;
    const lastNumber = parseInt(strNum.substr(9, 1), 10);
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(strNum.substr(i, 1), 10) * (10 - i);
    }
    sum = sum % 11;
    return (
      (sum < 2 && lastNumber === sum) || (sum >= 2 && lastNumber === 11 - sum)
    );
  }
};
const isDuplicate = (str, option = { maxDuplicate: 3 }) => {
  if (!str) return false;
  else {
    const regex = new RegExp(`^(?:(.)(?!\\1{${option.maxDuplicate}}))+$`);
    if (regex.test(str)) {
      return false;
    } else if (str === null) {
      return false;
    } else {
      return true;
    }
  }
};

export default {
  nationalCode,
  isDuplicate,
};
