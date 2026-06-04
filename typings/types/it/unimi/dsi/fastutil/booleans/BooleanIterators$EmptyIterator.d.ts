import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class BooleanIterators$EmptyIterator extends Object implements BooleanListIterator, Serializable, Cloneable {
    constructor()
    add(arg0: boolean): void;
    back(arg0: number): number;
    clone(): Object;
    protected clone(): Object;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): boolean;
    nextBoolean(): boolean;
    nextIndex(): number;
    previous(): boolean;
    previousBoolean(): boolean;
    previousIndex(): number;
    // private readResolve(): Object;
    remove(): void;
    set(arg0: boolean): void;
    skip(arg0: number): number;
}