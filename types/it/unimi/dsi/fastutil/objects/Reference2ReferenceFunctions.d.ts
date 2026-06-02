import type { Reference2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceFunction.d.ts'
import type { Reference2ReferenceFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceFunctions$EmptyFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ReferenceFunctions extends Object {
    static EMPTY_FUNCTION: Reference2ReferenceFunctions$EmptyFunction<Object, Object>;
    static singleton(paramarg0: Object | null, paramarg1: Object | null): (param0: Object | null) => Object | null;
    static synchronize(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => Object | null;
    static synchronize(paramarg0: (param0: Object | null) => Object | null, paramarg1: Object): (param0: Object | null) => Object | null;
    static unmodifiable(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => Object | null;
    private constructor()
}