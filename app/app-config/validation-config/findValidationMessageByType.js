export default (type = "matches", message = "ورودی") => {
  switch (type) {
    case "required":
      return `ضروری!`;
    case "matches":
      return `${message} معتبر نیست`;
    case "file":
      return `باید اندازه فایل کمتر از ${message} کیلوبایت باشد`;
    case "min":
      return `حداقل ${message} حرف`;
    case "email":
      return `ایمیل خود را به درستی وارد کنید`;
    case "password":
      return `رمز عبور باید دارای ۸ کاراکتر، یک حرف بزرگ، یک حرف کوچیک، یک عدد و یک کاراکتر باشد`;
    case "confirmPassword":
      return `پسورد ها مطابقت ندارند`;
    default:
      break;
  }
};
