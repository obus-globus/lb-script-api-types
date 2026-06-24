import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { Reference2BooleanOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Reference2BooleanOpenHashMap$ValueIterator extends Reference2BooleanOpenHashMap$MapIterator<Object> implements BooleanIterator {
    constructor(null_: { [key: string]: any })
    acceptOnIndex(arg0: (param0: boolean) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    next(): boolean;
    nextBoolean(): boolean;
    skip(arg0: number): number;
}