import type { Int2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { Int2IntOpenHashMap$MapEntry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntOpenHashMap$MapEntry.d.ts'
import type { Int2IntOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Int2IntOpenHashMap$EntryIterator extends Int2IntOpenHashMap$MapIterator<(param0: Int2IntMap$Entry) => void> implements ObjectIterator<Int2IntMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Int2IntOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2IntMap$Entry) => void, arg1: number): void;
    next(): Int2IntOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}