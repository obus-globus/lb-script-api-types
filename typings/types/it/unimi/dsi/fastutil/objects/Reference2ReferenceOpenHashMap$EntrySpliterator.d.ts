import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Reference2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceMap$Entry.d.ts'
import type { Reference2ReferenceOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceOpenHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ReferenceOpenHashMap$EntrySpliterator extends Reference2ReferenceOpenHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<Reference2ReferenceMap$Entry<K, V>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Reference2ReferenceOpenHashMap$EntrySpliterator)
    constructor(null_: Reference2ReferenceOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: (param0: Reference2ReferenceMap$Entry<K, V>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: number, arg1: number, arg2: boolean): Reference2ReferenceOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}