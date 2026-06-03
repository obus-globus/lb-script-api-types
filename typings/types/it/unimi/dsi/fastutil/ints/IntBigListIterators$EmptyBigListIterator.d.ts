import type { IntBigListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntBigListIterator.d.ts'
import type { IntConsumer } from '../../../../../it/unimi/dsi/fastutil/ints/IntConsumer.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer as IntConsumer_2 } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class IntBigListIterators$EmptyBigListIterator extends Object implements IntBigListIterator, Serializable, Cloneable {
    constructor()
    add(arg0: number): void;
    add(arg0: number): void;
    back(arg0: number): number;
    back(arg0: number): number;
    back(arg0: number): number;
    clone(): Object;
    protected clone(): Object;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextIndex(): number;
    nextInt(): number;
    previousIndex(): number;
    previousInt(): number;
    // private readResolve(): Object;
    set(arg0: number): void;
    set(arg0: number): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
    skip(arg0: number): number;
    skip(arg0: number): number;
}