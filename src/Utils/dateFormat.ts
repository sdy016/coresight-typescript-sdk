function getDateString(value: number) {
  if (value < 10) {
    return '0' + value.toString();
  } else {
    return value.toString();
  }
}

export function getConvertDateToString() {
  var date: Date = new Date();
  var year: string = date.getFullYear().toString();
  var days: string = getDateString(date.getDate());
  var month: string = getDateString(date.getMonth() + 1); //January is 0!
  var hour: string = getDateString(date.getHours());
  var minute: string = getDateString(date.getMinutes());
  var second: string = getDateString(date.getSeconds());
  return `${year}-${month}-${days} ${hour}:${minute}:${second}`;
}

export function getConvertDateToStringByParam(value: Date) {
  var date: Date = value;
  var year: string = date.getFullYear().toString();
  var days: string = getDateString(date.getDate());
  var month: string = getDateString(date.getMonth() + 1); //January is 0!
  var hour: string = getDateString(date.getHours());
  var minute: string = getDateString(date.getMinutes());
  var second: string = getDateString(date.getSeconds());
  return `${year}-${month}-${days} ${hour}:${minute}:${second}`;
}
