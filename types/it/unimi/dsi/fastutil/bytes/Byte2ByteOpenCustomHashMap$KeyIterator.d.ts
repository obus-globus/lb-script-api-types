import type { Byte2ByteOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteOpenCustomHashMap$MapIterator.d.ts'
import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { ByteIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
export class Byte2ByteOpenCustomHashMap$KeyIterator extends Byte2ByteOpenCustomHashMap$MapIterator<(param0: number) => void> implements ByteIterator {
    constructor(null_: Byte2ByteOpenCustomHashMap$KeyIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextByte(): number;
    skip(arg0: number): number;
}