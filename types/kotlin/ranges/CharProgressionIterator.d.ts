import type { CharIterator } from '../../kotlin/collections/CharIterator.d.ts'
export class CharProgressionIterator extends CharIterator {
    constructor(first: string, last: string, step: number)
    // private finalElement: number;
    // private hasNext: boolean;
    // private next: number;
    readonly step: number;
    hasNext(): boolean;
    nextChar(): string;
}