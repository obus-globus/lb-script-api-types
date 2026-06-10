import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ShortMaps extends Object {
    static EMPTY_MAP: Reference2ShortMaps$EmptyMap<Object>;
    static emptyMap(): Reference2ShortMap<Object>;
    static fastForEach(paramarg0: Reference2ShortMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Reference2ShortMap<Object>): Reference2ShortMap$Entry<Object>[];
    static fastIterator(paramarg0: Reference2ShortMap<Object>): ObjectIterator<Reference2ShortMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2ShortMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2ShortMap<Object>;
    static synchronize(paramarg0: Reference2ShortMap<Object>): Reference2ShortMap<Object>;
    static synchronize(paramarg0: Reference2ShortMap<Object>, paramarg1: Object): Reference2ShortMap<Object>;
    static unmodifiable(paramarg0: Reference2ShortMap<Object>): Reference2ShortMap<Object>;
    private constructor()
}