import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteIterators$SingletonIterator extends Object implements ByteListIterator {
    constructor(arg0: number)
    // private curr: number;
    // private element: number;
    add(arg0: number): void;
    add(arg0: number): void;
    back(arg0: number): number;
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
    skip(arg0: number): number;
}