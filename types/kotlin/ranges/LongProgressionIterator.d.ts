import type { LongIterator } from '../../kotlin/collections/LongIterator.d.ts'
export class LongProgressionIterator extends LongIterator {
    constructor(first: number, last: number, step: number)
    // private finalElement: number;
    // private hasNext: boolean;
    // private next: number;
    readonly step: number;
    hasNext(): boolean;
    nextLong(): number;
}