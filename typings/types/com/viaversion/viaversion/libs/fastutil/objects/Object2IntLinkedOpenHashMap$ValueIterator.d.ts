import type { IntListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntListIterator.d.ts'
import type { Object2IntLinkedOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { IntConsumer } from '../../../../../../java/util/function/IntConsumer.d.ts'
export class Object2IntLinkedOpenHashMap$ValueIterator extends Object2IntLinkedOpenHashMap$MapIterator<Object> implements IntListIterator {
    constructor(null_: Object2IntLinkedOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}