import type { PrimitiveIterator$OfInt } from '../../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StateSetImpl$StateListIterator extends Object implements PrimitiveIterator$OfInt {
    private constructor(null_: StateSetImpl$StateListIterator)
    // private i: number;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextInt(): number;
    remove(): void;
}