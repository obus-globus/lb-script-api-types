import type { Long2ReferenceOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceOpenCustomHashMap$MapIterator.d.ts'
import type { LongConsumer } from '../../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { LongIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer } from '../../../../../java/util/function/LongConsumer.d.ts'
export class Long2ReferenceOpenCustomHashMap$KeyIterator extends Long2ReferenceOpenCustomHashMap$MapIterator<Object> implements LongIterator {
    constructor(null_: Long2ReferenceOpenCustomHashMap$KeyIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextLong(): number;
    skip(arg0: number): number;
}