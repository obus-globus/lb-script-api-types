import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { Byte2BooleanOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2BooleanOpenCustomHashMap$ValueIterator extends Byte2BooleanOpenCustomHashMap$MapIterator<(param0: boolean) => void> implements BooleanIterator {
    constructor(null_: Byte2BooleanOpenCustomHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: boolean) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    next(): boolean;
    nextBoolean(): boolean;
    skip(arg0: number): number;
}