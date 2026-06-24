import type { Short2DoubleOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleOpenHashMap$MapIterator.d.ts'
import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
export class Short2DoubleOpenHashMap$KeyIterator extends Short2DoubleOpenHashMap$MapIterator<(param0: number) => void> implements ShortIterator {
    constructor(null_: { [key: string]: any })
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextShort(): number;
    skip(arg0: number): number;
}