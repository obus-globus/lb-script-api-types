import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ByteMaps extends Object {
    static EMPTY_MAP: Reference2ByteMaps$EmptyMap<Object>;
    static emptyMap(): Reference2ByteMap<Object>;
    static fastForEach(paramarg0: Reference2ByteMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Reference2ByteMap<Object>): Reference2ByteMap$Entry<Object>[];
    static fastIterator(paramarg0: Reference2ByteMap<Object>): ObjectIterator<Reference2ByteMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2ByteMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2ByteMap<Object>;
    static synchronize(paramarg0: Reference2ByteMap<Object>): Reference2ByteMap<Object>;
    static synchronize(paramarg0: Reference2ByteMap<Object>, paramarg1: Object): Reference2ByteMap<Object>;
    static unmodifiable(paramarg0: Reference2ByteMap<Object>): Reference2ByteMap<Object>;
    private constructor()
}