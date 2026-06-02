import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Int2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteLinkedOpenHashMap$MapIterator.d.ts'
export class Int2ByteLinkedOpenHashMap$ValueIterator extends Int2ByteLinkedOpenHashMap$MapIterator<(param0: number) => void> implements ByteListIterator {
    constructor(null_: Int2ByteLinkedOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}