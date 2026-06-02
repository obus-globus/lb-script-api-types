import type { Object2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleFunction.d.ts'
import type { Object2DoubleFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleFunctions extends Object {
    static EMPTY_FUNCTION: Object2DoubleFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Double;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object | null) => kotlin.Double;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object | null) => kotlin.Double;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Double): (param0: Object | null) => kotlin.Double;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Double, paramarg1: Object): (param0: Object | null) => kotlin.Double;
    static unmodifiable(paramarg0: (param0: Object | null) => kotlin.Double): (param0: Object | null) => kotlin.Double;
    private constructor()
}