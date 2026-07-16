import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class SlidingWindowKt extends Object {
    static checkWindowSizeStep(size: number, step: number): void;
    static windowedIterator<T extends unknown>(iterator: Iterator<T>, size: number, step: number, partialWindows: boolean, reuseBuffer: boolean): Iterator<T[]>;
    static windowedSequence<T extends unknown>(self: Sequence<T>, size: number, step: number, partialWindows: boolean, reuseBuffer: boolean): Sequence<T[]>;
}