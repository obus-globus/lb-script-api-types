import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteIterators$UnmodifiableListIterator extends Object implements ByteListIterator {
    constructor(arg0: ByteListIterator)
    // private i: ByteListIterator;
    add(arg0: number): void;
    add(arg0: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextByte(): number;
    nextIndex(): number;
    previous(): number;
    previousByte(): number;
    previousIndex(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}