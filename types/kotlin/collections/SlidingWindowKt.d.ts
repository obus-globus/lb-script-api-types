import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class SlidingWindowKt extends Object {
    static checkWindowSizeStep(paramarg0: number, paramarg1: number): void;
    static windowedIterator(paramarg0: Iterator<Object>, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: boolean): Iterator<Object>;
    static windowedSequence(paramarg0: Sequence<Object>, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: boolean): Sequence<Object>;
}