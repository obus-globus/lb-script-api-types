import type { Long2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Long2ShortLinkedOpenHashMap$ValueIterator extends Long2ShortLinkedOpenHashMap$MapIterator<(param0: number) => void> implements ShortListIterator {
    constructor(null_: { [key: string]: any })
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}