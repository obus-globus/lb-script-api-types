import type { BooleanBigListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanBigListIterator.d.ts'
import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class BooleanBigListIterators$EmptyBigListIterator extends Object implements BooleanBigListIterator, Serializable, Cloneable {
    constructor()
    add(arg0: boolean): void;
    add(arg0: boolean): void;
    back(arg0: number): number;
    back(arg0: number): number;
    clone(): Object;
    protected clone(): Object;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextBoolean(): boolean;
    nextIndex(): number;
    previousBoolean(): boolean;
    previousIndex(): number;
    // private readResolve(): Object;
    set(arg0: boolean): void;
    set(arg0: boolean): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
    skip(arg0: number): number;
}