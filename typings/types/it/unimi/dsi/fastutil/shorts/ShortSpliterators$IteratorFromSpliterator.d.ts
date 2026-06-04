import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterator.d.ts'
import type { ShortSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortSpliterators$IteratorFromSpliterator extends Object implements ShortConsumer, ShortIterator {
    constructor(arg0: ShortSpliterator)
    // private hasPeeked: boolean;
    // private holder: number;
    // private spliterator: ShortSpliterator;
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextShort(): number;
    skip(arg0: number): number;
}