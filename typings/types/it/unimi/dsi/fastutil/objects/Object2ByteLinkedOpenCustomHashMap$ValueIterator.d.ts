import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Object2ByteLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteLinkedOpenCustomHashMap$MapIterator.d.ts'
export class Object2ByteLinkedOpenCustomHashMap$ValueIterator extends Object2ByteLinkedOpenCustomHashMap$MapIterator<Object> implements ByteListIterator {
    constructor(null_: Object2ByteLinkedOpenCustomHashMap$ValueIterator)
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