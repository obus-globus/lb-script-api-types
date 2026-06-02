import type { ByteBigListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBigListIterator.d.ts'
import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class ByteBigListIterators$EmptyBigListIterator extends Object implements ByteBigListIterator, Serializable, Cloneable {
    constructor()
    add(arg0: number): void;
    add(arg0: number): void;
    back(arg0: number): number;
    back(arg0: number): number;
    clone(): Object;
    protected clone(): Object;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextByte(): number;
    nextIndex(): number;
    previousByte(): number;
    previousIndex(): number;
    // private readResolve(): Object;
    set(arg0: number): void;
    set(arg0: number): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
    skip(arg0: number): number;
}