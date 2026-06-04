import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatIterators$SingletonIterator extends Object implements FloatListIterator {
    constructor(arg0: number)
    // private curr: number;
    // private element: number;
    add(arg0: number): void;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextFloat(): number;
    nextIndex(): number;
    previous(): number;
    previousFloat(): number;
    previousIndex(): number;
    remove(): void;
    set(arg0: number): void;
    skip(arg0: number): number;
}