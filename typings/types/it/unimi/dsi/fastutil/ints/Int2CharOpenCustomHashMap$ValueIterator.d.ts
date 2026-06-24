import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { Int2CharOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
export class Int2CharOpenCustomHashMap$ValueIterator extends Int2CharOpenCustomHashMap$MapIterator<(param0: string) => void> implements CharIterator {
    constructor(null_: { [key: string]: any })
    acceptOnIndex(arg0: (param0: string) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): string;
    nextChar(): string;
    skip(arg0: number): number;
}