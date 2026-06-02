import type { PrimitiveIterator$OfInt } from '../../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export class StateSetImpl$StateSetIterator extends Object implements Iterator<S> {
    private constructor(null_: StateSetImpl$StateSetIterator, intIterator: PrimitiveIterator$OfInt)
    // private intIterator: PrimitiveIterator$OfInt;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next<S extends Object | number | string | boolean>(): S;
    remove(): void;
}