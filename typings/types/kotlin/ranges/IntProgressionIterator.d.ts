import type { IntIterator } from '../../kotlin/collections/IntIterator.d.ts'
export class IntProgressionIterator extends IntIterator {
    constructor(first: number, last: number, step: number)
    // private finalElement: number;
    // private hasNext: boolean;
    // private next: number;
    readonly step: number;
    hasNext(): boolean;
    nextInt(): number;
}