import type { IntConsumer } from '../../../../../it/unimi/dsi/fastutil/ints/IntConsumer.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer as IntConsumer_2 } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class IntIterators$EmptyIterator extends Object implements IntListIterator, Serializable, Cloneable {
    constructor()
    add(arg0: number): void;
    back(arg0: number): number;
    clone(): Object;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextIndex(): number;
    nextInt(): number;
    previous(): number;
    previousIndex(): number;
    previousInt(): number;
    // private readResolve(): Object;
    remove(): void;
    set(arg0: number): void;
    skip(arg0: number): number;
}