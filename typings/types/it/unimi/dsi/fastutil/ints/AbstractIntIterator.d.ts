import type { IntConsumer } from '../../../../../it/unimi/dsi/fastutil/ints/IntConsumer.d.ts'
import type { IntIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer as IntConsumer_2 } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractIntIterator extends Object implements IntIterator {
    constructor()
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextInt(): number;
    skip(arg0: number): number;
}