import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Float2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteLinkedOpenHashMap$MapIterator.d.ts'
export class Float2ByteLinkedOpenHashMap$ValueIterator extends Float2ByteLinkedOpenHashMap$MapIterator<(param0: number) => void> implements ByteListIterator {
    constructor(null_: Float2ByteLinkedOpenHashMap$ValueIterator)
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