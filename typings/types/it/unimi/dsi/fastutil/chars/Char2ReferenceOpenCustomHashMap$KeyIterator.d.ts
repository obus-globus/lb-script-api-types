import type { Char2ReferenceOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceOpenCustomHashMap$MapIterator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
export class Char2ReferenceOpenCustomHashMap$KeyIterator extends Char2ReferenceOpenCustomHashMap$MapIterator<Object> implements CharIterator {
    constructor(null_: { [key: string]: any })
    acceptOnIndex(arg0: (param0: string) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): string;
    nextChar(): string;
    skip(arg0: number): number;
}