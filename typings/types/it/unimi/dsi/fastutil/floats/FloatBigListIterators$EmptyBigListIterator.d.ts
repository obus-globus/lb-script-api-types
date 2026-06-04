import type { FloatBigListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBigListIterator.d.ts'
import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class FloatBigListIterators$EmptyBigListIterator extends Object implements FloatBigListIterator, Serializable, Cloneable {
    constructor()
    add(arg0: number): void;
    back(arg0: number): number;
    clone(): Object;
    protected clone(): Object;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextFloat(): number;
    nextIndex(): number;
    previousFloat(): number;
    previousIndex(): number;
    // private readResolve(): Object;
    set(arg0: number): void;
    skip(arg0: number): number;
}