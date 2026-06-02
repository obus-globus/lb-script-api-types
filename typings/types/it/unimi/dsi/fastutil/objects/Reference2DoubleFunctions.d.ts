import type { Reference2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleFunction.d.ts'
import type { Reference2DoubleFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2DoubleFunctions extends Object {
    static EMPTY_FUNCTION: Reference2DoubleFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Double;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object | null) => kotlin.Double;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object | null) => kotlin.Double;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Double): (param0: Object | null) => kotlin.Double;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Double, paramarg1: Object): (param0: Object | null) => kotlin.Double;
    static unmodifiable(paramarg0: (param0: Object | null) => kotlin.Double): (param0: Object | null) => kotlin.Double;
    private constructor()
}