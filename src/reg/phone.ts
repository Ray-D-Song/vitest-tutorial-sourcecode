export function regChinesePhoneNumber(phoneNumber: string) {
  var regex = /^1[3456789]\d{9}$/;
  return regex.test(phoneNumber);
}