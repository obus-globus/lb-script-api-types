import type { Short2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleFunction.d.ts'
import type { Short2DoubleFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2DoubleFunctions extends Object {
    static EMPTY_FUNCTION: Short2DoubleFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object) => number): (param0: number) => number;
    static singleton(paramarg0: number, paramarg1: number): (param0: number) => number;
    static synchronize(paramarg0: (param0: number) => number): (param0: number) => number;
    static synchronize(paramarg0: (param0: number) => number, paramarg1: Object): (param0: number) => number;
    static unmodifiable(paramarg0: (param0: number) => number): (param0: number) => number;
    private constructor()
}