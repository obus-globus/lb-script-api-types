import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export class ShortIterators$ListIteratorWrapper extends Object implements ShortListIterator {
    constructor(arg0: ListIterator<number>)
    // private i: ListIterator<number>;
    add(arg0: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextIndex(): number;
    nextShort(): number;
    previous(): number;
    previousIndex(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}