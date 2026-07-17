import type { Float2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharMap$Entry.d.ts'
import type { Float2CharOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharOpenCustomHashMap$MapEntry.d.ts'
import type { Float2CharOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2CharOpenCustomHashMap$EntryIterator extends Float2CharOpenCustomHashMap$MapIterator<(param0: Float2CharMap$Entry) => void> implements ObjectIterator<Float2CharMap$Entry> {
    private constructor(null_: { [key: string]: any })
    // private entry: Float2CharOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2CharMap$Entry) => void, arg1: number): void;
    next(): Float2CharOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}