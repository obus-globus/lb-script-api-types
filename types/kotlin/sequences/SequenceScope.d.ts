import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export abstract class SequenceScope<T extends Object | number | string | boolean> extends Object {
    constructor()
    yield(value: T): void;
    yieldAll(elements: T[]): void;
    yieldAll(iterator: Iterator<T>): void;
    yieldAll(sequence: Sequence<T>): void;
}