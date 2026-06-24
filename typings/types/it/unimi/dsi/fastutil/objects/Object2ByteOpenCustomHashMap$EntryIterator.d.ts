import type { Object2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteMap$Entry.d.ts'
import type { Object2ByteOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteOpenCustomHashMap$MapEntry.d.ts'
import type { Object2ByteOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ByteOpenCustomHashMap$EntryIterator extends Object2ByteOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Object2ByteMap$Entry<K>> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Object2ByteOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2ByteMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Object2ByteOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}