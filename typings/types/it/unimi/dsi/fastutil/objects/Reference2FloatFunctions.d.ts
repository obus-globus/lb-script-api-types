import type { Reference2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatFunction.d.ts'
import type { Reference2FloatFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2FloatFunctions extends Object {
    static EMPTY_FUNCTION: Reference2FloatFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Float;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object | null) => kotlin.Float;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object | null) => kotlin.Float;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Float): (param0: Object | null) => kotlin.Float;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Float, paramarg1: Object): (param0: Object | null) => kotlin.Float;
    static unmodifiable(paramarg0: (param0: Object | null) => kotlin.Float): (param0: Object | null) => kotlin.Float;
    private constructor()
}