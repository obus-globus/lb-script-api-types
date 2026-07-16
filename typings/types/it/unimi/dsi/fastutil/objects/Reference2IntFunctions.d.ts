import type { Reference2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntFunction.d.ts'
import type { Reference2IntFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2IntFunctions extends Object {
    static EMPTY_FUNCTION: Reference2IntFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object) => number): (param0: Object) => number;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object) => number;
    static synchronize(paramarg0: (param0: Object) => number): (param0: Object) => number;
    static synchronize(paramarg0: (param0: Object) => number, paramarg1: Object): (param0: Object) => number;
    static unmodifiable(paramarg0: (param0: Object) => number): (param0: Object) => number;
    private constructor()
}