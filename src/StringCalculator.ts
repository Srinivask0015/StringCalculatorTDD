export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;
    const parts = numbers.split(/,|\n/);
    return parts.reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
}