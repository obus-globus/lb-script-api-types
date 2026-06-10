import type { Object2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceFunction.d.ts'
import type { Object2ReferenceFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceFunctions$EmptyFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceFunctions extends Object {
    static EMPTY_FUNCTION: Object2ReferenceFunctions$EmptyFunction<Object, Object>;
    static singleton(paramarg0: Object | null, paramarg1: Object | null): (param0: Object) => Object | null;
    static synchronize(paramarg0: (param0: Object) => Object | null): (param0: Object) => Object | null;
    static synchronize(paramarg0: (param0: Object) => Object | null, paramarg1: Object): (param0: Object) => Object | null;
    static unmodifiable(paramarg0: (param0: Object) => Object | null): (param0: Object) => Object | null;
    private constructor()
}