import type { CharIterator } from '../../../kotlin/collections/CharIterator.d.ts'
export class ArrayCharIterator extends CharIterator {
    constructor(array: string[])
    // private array: string[];
    // private index: number;
    hasNext(): boolean;
    nextChar(): string;
}