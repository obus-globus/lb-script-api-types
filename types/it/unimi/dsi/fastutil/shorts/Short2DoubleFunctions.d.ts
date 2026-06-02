import type { Short2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleFunction.d.ts'
import type { Short2DoubleFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2DoubleFunctions extends Object {
    static EMPTY_FUNCTION: Short2DoubleFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: number) => kotlin.Double;
    static singleton(paramarg0: number, paramarg1: number): (param0: number) => kotlin.Double;
    static singleton(paramarg0: number, paramarg1: number): (param0: number) => kotlin.Double;
    static synchronize(paramarg0: (param0: number) => kotlin.Double): (param0: number) => kotlin.Double;
    static synchronize(paramarg0: (param0: number) => kotlin.Double, paramarg1: Object): (param0: number) => kotlin.Double;
    static unmodifiable(paramarg0: (param0: number) => kotlin.Double): (param0: number) => kotlin.Double;
    private constructor()
}