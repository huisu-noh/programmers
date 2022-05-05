function solution2(phoneNumber: string): string {
  let last = [];
  if (phoneNumber.length < 4 || phoneNumber.length > 20) return '';
  for (let i = 0; i < phoneNumber.length; i++) {
    if (i < phoneNumber.length - 4) {
      last.push('*');
    } else {
      last.push(phoneNumber[i]);
    }
  }

  return last.join('');
}

console.log(solution2('01080250673'));
