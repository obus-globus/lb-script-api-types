import type { PrimitiveIterator$OfInt } from '../../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export class StateSetImpl$StateSetIterator extends Object implements Iterator<S> {
    private constructor(null_: StateSetImpl$StateSetIterator, intIterator: PrimitiveIterator$OfInt)
    // private intIterator: PrimitiveIterator$OfInt;
    forEachRemaining<S extends unknown>(arg0: (param0: S) => void): void;
    hasNext(): boolean;
    next<S extends unknown>(): S;
    remove(): void;
}