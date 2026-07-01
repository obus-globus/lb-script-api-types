import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceMap$Entry.d.ts'
import type { Short2ReferenceOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceOpenCustomHashMap$MapEntry.d.ts'
import type { Short2ReferenceOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ReferenceOpenCustomHashMap$EntryIterator extends Short2ReferenceOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Short2ReferenceMap$Entry<V>> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Short2ReferenceOpenCustomHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Short2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Short2ReferenceOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}