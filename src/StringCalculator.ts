export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const match = numbers.match(/^\/\/(.+)\n/);
      if (match) {
        delimiter = new RegExp(match[1]);
        numbers = numbers.substring(match[0].length);
      }
    }

    const parts = numbers.split(delimiter).map((n) => parseInt(n, 10));
    const negatives = parts.filter((n) => n < 0);
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return parts.reduce((sum, num) => sum + num, 0);
  }

}