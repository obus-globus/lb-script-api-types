import type { LongBigListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongBigListIterator.d.ts'
import type { LongConsumer } from '../../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer as LongConsumer_2 } from '../../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class LongBigListIterators$EmptyBigListIterator extends Object implements LongBigListIterator, Serializable, Cloneable {
    constructor()
    add(arg0: number): void;
    back(arg0: number): number;
    clone(): Object;
    protected clone(): Object;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextIndex(): number;
    nextLong(): number;
    previousIndex(): number;
    previousLong(): number;
    // private readResolve(): Object;
    set(arg0: number): void;
    skip(arg0: number): number;
}