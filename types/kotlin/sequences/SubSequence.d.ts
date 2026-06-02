import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { DropTakeSequence } from '../../kotlin/sequences/DropTakeSequence.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class SubSequence<T extends Object | number | string | boolean> extends Object implements DropTakeSequence<T>, Sequence<T> {
    constructor(sequence: Sequence<T>, startIndex: number, endIndex: number)
    // private /*not mapped: */ getCount(): number;
    // private endIndex: number;
    // private sequence: Sequence<T>;
    // private startIndex: number;
    drop(n: number): Sequence<T>;
    iterator(): Iterator<T>;
    take(n: number): Sequence<T>;
}