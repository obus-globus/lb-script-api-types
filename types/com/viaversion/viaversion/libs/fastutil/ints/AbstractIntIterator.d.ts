import type { IntConsumer } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntConsumer.d.ts'
import type { IntIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractIntIterator extends Object implements IntIterator {
    constructor()
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    skip(arg0: number): number;
}