import type { Int2IntFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntFunction.d.ts'
import type { Int2IntFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2IntFunctions extends Object {
    static EMPTY_FUNCTION: Int2IntFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: number) => kotlin.Int;
    static singleton(paramarg0: number, paramarg1: number): (param0: number) => kotlin.Int;
    static singleton(paramarg0: number, paramarg1: number): (param0: number) => kotlin.Int;
    static synchronize(paramarg0: (param0: number) => kotlin.Int): (param0: number) => kotlin.Int;
    static synchronize(paramarg0: (param0: number) => kotlin.Int, paramarg1: Object): (param0: number) => kotlin.Int;
    static unmodifiable(paramarg0: (param0: number) => kotlin.Int): (param0: number) => kotlin.Int;
    private constructor()
}