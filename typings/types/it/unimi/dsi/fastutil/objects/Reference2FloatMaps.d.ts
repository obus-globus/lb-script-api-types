import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2FloatMaps extends Object {
    static EMPTY_MAP: Reference2FloatMaps$EmptyMap<Object>;
    static emptyMap(): Reference2FloatMap<Object>;
    static fastForEach(paramarg0: Reference2FloatMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Reference2FloatMap<Object>): Reference2FloatMap$Entry<Object>[];
    static fastIterator(paramarg0: Reference2FloatMap<Object>): ObjectIterator<Reference2FloatMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2FloatMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2FloatMap<Object>;
    static synchronize(paramarg0: Reference2FloatMap<Object>): Reference2FloatMap<Object>;
    static synchronize(paramarg0: Reference2FloatMap<Object>, paramarg1: Object): Reference2FloatMap<Object>;
    static unmodifiable(paramarg0: Reference2FloatMap<Object>): Reference2FloatMap<Object>;
    private constructor()
}