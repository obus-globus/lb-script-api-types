import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Float2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanLinkedOpenHashMap$MapIterator.d.ts'
export class Float2BooleanLinkedOpenHashMap$ValueIterator extends Float2BooleanLinkedOpenHashMap$MapIterator<(param0: boolean) => void> implements BooleanListIterator {
    constructor(null_: JavaMap<any, any>)
    acceptOnIndex(arg0: (param0: boolean) => void, arg1: number): void;
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}