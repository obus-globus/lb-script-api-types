import type { Reference2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectFunction.d.ts'
import type { Reference2ObjectFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectFunctions$EmptyFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ObjectFunctions extends Object {
    static EMPTY_FUNCTION: Reference2ObjectFunctions$EmptyFunction<Object, Object>;
    static singleton(paramarg0: Object | null, paramarg1: Object | null): (param0: Object | null) => Object | null;
    static synchronize(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => Object | null;
    static synchronize(paramarg0: (param0: Object | null) => Object | null, paramarg1: Object): (param0: Object | null) => Object | null;
    static unmodifiable(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => Object | null;
    private constructor()
}