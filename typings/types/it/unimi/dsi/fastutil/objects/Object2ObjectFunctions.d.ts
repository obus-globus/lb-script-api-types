import type { Object2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectFunction.d.ts'
import type { Object2ObjectFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectFunctions$EmptyFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectFunctions extends Object {
    static EMPTY_FUNCTION: Object2ObjectFunctions$EmptyFunction<Object, Object>;
    static singleton(paramarg0: Object | null, paramarg1: Object | null): (param0: Object) => Object | null;
    static synchronize(paramarg0: (param0: Object) => Object | null): (param0: Object) => Object | null;
    static synchronize(paramarg0: (param0: Object) => Object | null, paramarg1: Object): (param0: Object) => Object | null;
    static unmodifiable(paramarg0: (param0: Object) => Object | null): (param0: Object) => Object | null;
    private constructor()
}