import type { Object2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanFunction.d.ts'
import type { Object2BooleanFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanFunctions extends Object {
    static EMPTY_FUNCTION: Object2BooleanFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Boolean;
    static singleton(paramarg0: Object | null, paramarg1: boolean): (param0: Object | null) => kotlin.Boolean;
    static singleton(paramarg0: Object | null, paramarg1: boolean): (param0: Object | null) => kotlin.Boolean;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Boolean, paramarg1: Object): (param0: Object | null) => kotlin.Boolean;
    static unmodifiable(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    private constructor()
}