import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2LongMaps extends Object {
    static EMPTY_MAP: Reference2LongMaps$EmptyMap<Object>;
    static emptyMap(): Reference2LongMap<Object>;
    static fastForEach(paramarg0: Reference2LongMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Reference2LongMap<Object>): Reference2LongMap$Entry<Object>[];
    static fastIterator(paramarg0: Reference2LongMap<Object>): ObjectIterator<Reference2LongMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2LongMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2LongMap<Object>;
    static synchronize(paramarg0: Reference2LongMap<Object>): Reference2LongMap<Object>;
    static synchronize(paramarg0: Reference2LongMap<Object>, paramarg1: Object): Reference2LongMap<Object>;
    static unmodifiable(paramarg0: Reference2LongMap<Object>): Reference2LongMap<Object>;
    private constructor()
}