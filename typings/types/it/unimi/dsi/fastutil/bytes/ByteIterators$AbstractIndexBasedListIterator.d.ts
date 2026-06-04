import type { ByteIterators$AbstractIndexBasedIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIterators$AbstractIndexBasedIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export abstract class ByteIterators$AbstractIndexBasedListIterator extends ByteIterators$AbstractIndexBasedIterator implements ByteListIterator {
    constructor(arg0: number, arg1: number)
    add(arg0: number): void;
    add(arg0: number, arg1: number): void;
    back(arg0: number): number;
    hasPrevious(): boolean;
    next(): number;
    nextIndex(): number;
    previous(): number;
    previousByte(): number;
    previousIndex(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number, arg1: number): void;
}