import type { ByteBigListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBigListIterator.d.ts'
import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteBigListIterators$UnmodifiableBigListIterator extends Object implements ByteBigListIterator {
    constructor(arg0: ByteBigListIterator)
    // private i: ByteBigListIterator;
    add(arg0: number): void;
    add(arg0: number): void;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextByte(): number;
    nextIndex(): number;
    previousByte(): number;
    previousIndex(): number;
    set(arg0: number): void;
    set(arg0: number): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
}