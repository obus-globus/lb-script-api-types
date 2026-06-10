import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2DoubleMaps extends Object {
    static EMPTY_MAP: Reference2DoubleMaps$EmptyMap<Object>;
    static emptyMap(): Reference2DoubleMap<Object>;
    static fastForEach(paramarg0: Reference2DoubleMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Reference2DoubleMap<Object>): Reference2DoubleMap$Entry<Object>[];
    static fastIterator(paramarg0: Reference2DoubleMap<Object>): ObjectIterator<Reference2DoubleMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2DoubleMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2DoubleMap<Object>;
    static synchronize(paramarg0: Reference2DoubleMap<Object>): Reference2DoubleMap<Object>;
    static synchronize(paramarg0: Reference2DoubleMap<Object>, paramarg1: Object): Reference2DoubleMap<Object>;
    static unmodifiable(paramarg0: Reference2DoubleMap<Object>): Reference2DoubleMap<Object>;
    private constructor()
}