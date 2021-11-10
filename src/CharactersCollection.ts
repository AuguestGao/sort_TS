import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const chars = this.data.split("");
    const leftChar = chars[leftIndex];
    chars[leftIndex] = chars[rightIndex];
    chars[rightIndex] = leftChar;
    this.data = chars.join("");
  }
}
