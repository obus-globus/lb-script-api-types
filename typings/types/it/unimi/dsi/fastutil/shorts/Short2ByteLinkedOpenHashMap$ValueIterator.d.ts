import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Short2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteLinkedOpenHashMap$MapIterator.d.ts'
export class Short2ByteLinkedOpenHashMap$ValueIterator extends Short2ByteLinkedOpenHashMap$MapIterator<(param0: number) => void> implements ByteListIterator {
    constructor(null_: { [key: string]: any })
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}