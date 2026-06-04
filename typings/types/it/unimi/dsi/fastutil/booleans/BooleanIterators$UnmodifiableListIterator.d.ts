import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanIterators$UnmodifiableListIterator extends Object implements BooleanListIterator {
    constructor(arg0: BooleanListIterator)
    // private i: BooleanListIterator;
    add(arg0: boolean): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): boolean;
    nextBoolean(): boolean;
    nextIndex(): number;
    previous(): boolean;
    previousBoolean(): boolean;
    previousIndex(): number;
    remove(): void;
    set(arg0: boolean): void;
}