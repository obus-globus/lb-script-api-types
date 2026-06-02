import type { Char2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleFunction.d.ts'
import type { Char2DoubleFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2DoubleFunctions extends Object {
    static EMPTY_FUNCTION: Char2DoubleFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: string) => kotlin.Double;
    static singleton(paramarg0: string, paramarg1: number): (param0: string) => kotlin.Double;
    static singleton(paramarg0: string, paramarg1: number): (param0: string) => kotlin.Double;
    static synchronize(paramarg0: (param0: string) => kotlin.Double): (param0: string) => kotlin.Double;
    static synchronize(paramarg0: (param0: string) => kotlin.Double, paramarg1: Object): (param0: string) => kotlin.Double;
    static unmodifiable(paramarg0: (param0: string) => kotlin.Double): (param0: string) => kotlin.Double;
    private constructor()
}