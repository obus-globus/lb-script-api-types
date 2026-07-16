import type { Reference2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanFunction.d.ts'
import type { Reference2BooleanFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2BooleanFunctions extends Object {
    static EMPTY_FUNCTION: Reference2BooleanFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static singleton(paramarg0: Object | null, paramarg1: boolean): (param0: Object) => boolean;
    static synchronize(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static synchronize(paramarg0: (param0: Object) => boolean, paramarg1: Object): (param0: Object) => boolean;
    static unmodifiable(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    private constructor()
}