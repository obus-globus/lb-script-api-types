import type { Byte2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceMap$Entry.d.ts'
import type { Byte2ReferenceOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceOpenCustomHashMap$MapEntry.d.ts'
import type { Byte2ReferenceOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ReferenceOpenCustomHashMap$FastEntryIterator extends Byte2ReferenceOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Byte2ReferenceMap$Entry<V>> {
    private constructor(null_: { [key: string]: any })
    // private entry: Byte2ReferenceOpenCustomHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Byte2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Byte2ReferenceOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}