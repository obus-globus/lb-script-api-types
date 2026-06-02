import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2IntMaps extends Object {
    static EMPTY_MAP: Reference2IntMaps$EmptyMap<Object>;
    static emptyMap(): Reference2IntMap<Object>;
    static fastForEach(paramarg0: Reference2IntMap<Object>, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Reference2IntMap<Object>): K[];
    static fastIterator(paramarg0: Reference2IntMap<Object>): ObjectIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2IntMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2IntMap<Object>;
    static synchronize(paramarg0: Reference2IntMap<Object>): Reference2IntMap<Object>;
    static synchronize(paramarg0: Reference2IntMap<Object>, paramarg1: Object): Reference2IntMap<Object>;
    static unmodifiable(paramarg0: Reference2IntMap<Object>): Reference2IntMap<Object>;
    private constructor()
}