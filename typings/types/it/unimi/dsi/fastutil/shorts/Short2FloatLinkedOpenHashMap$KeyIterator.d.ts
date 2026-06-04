import type { Short2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2FloatLinkedOpenHashMap$KeyIterator extends Short2FloatLinkedOpenHashMap$MapIterator<(param0: number) => void> implements ShortListIterator {
    constructor(null_: Short2FloatLinkedOpenHashMap$KeyIterator)
    constructor(null_: Short2FloatLinkedOpenHashMap$KeyIterator, arg1: number)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}