import type { Char2BooleanOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanOpenHashMap$MapIterator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
export class Char2BooleanOpenHashMap$KeyIterator extends Char2BooleanOpenHashMap$MapIterator<(param0: string) => void> implements CharIterator {
    constructor(null_: Char2BooleanOpenHashMap$KeyIterator)
    acceptOnIndex(arg0: (param0: string) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): string;
    nextChar(): string;
    skip(arg0: number): number;
}