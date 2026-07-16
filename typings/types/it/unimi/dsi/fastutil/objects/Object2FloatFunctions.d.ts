import type { Object2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatFunction.d.ts'
import type { Object2FloatFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatFunctions extends Object {
    static EMPTY_FUNCTION: Object2FloatFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object) => number): (param0: Object) => number;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object) => number;
    static synchronize(paramarg0: (param0: Object) => number): (param0: Object) => number;
    static synchronize(paramarg0: (param0: Object) => number, paramarg1: Object): (param0: Object) => number;
    static unmodifiable(paramarg0: (param0: Object) => number): (param0: Object) => number;
    private constructor()
}