import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2BooleanMaps extends Object {
    static EMPTY_MAP: Reference2BooleanMaps$EmptyMap<Object>;
    static emptyMap(): Reference2BooleanMap<Object>;
    static fastForEach(paramarg0: Reference2BooleanMap<Object>, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Reference2BooleanMap<Object>): K[];
    static fastIterator(paramarg0: Reference2BooleanMap<Object>): ObjectIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: boolean): Reference2BooleanMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: boolean): Reference2BooleanMap<Object>;
    static synchronize(paramarg0: Reference2BooleanMap<Object>): Reference2BooleanMap<Object>;
    static synchronize(paramarg0: Reference2BooleanMap<Object>, paramarg1: Object): Reference2BooleanMap<Object>;
    static unmodifiable(paramarg0: Reference2BooleanMap<Object>): Reference2BooleanMap<Object>;
    private constructor()
}