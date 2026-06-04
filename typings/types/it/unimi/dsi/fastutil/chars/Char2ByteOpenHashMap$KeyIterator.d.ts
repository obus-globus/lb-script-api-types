import type { Char2ByteOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteOpenHashMap$MapIterator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
export class Char2ByteOpenHashMap$KeyIterator extends Char2ByteOpenHashMap$MapIterator<(param0: string) => void> implements CharIterator {
    constructor(null_: Char2ByteOpenHashMap$KeyIterator)
    acceptOnIndex(arg0: (param0: string) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): string;
    nextChar(): string;
    skip(arg0: number): number;
}