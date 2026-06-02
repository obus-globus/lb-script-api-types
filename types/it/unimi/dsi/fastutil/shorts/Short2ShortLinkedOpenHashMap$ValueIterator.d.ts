import type { Short2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2ShortLinkedOpenHashMap$ValueIterator extends Short2ShortLinkedOpenHashMap$MapIterator<(param0: number) => void> implements ShortListIterator {
    constructor(null_: Short2ShortLinkedOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}