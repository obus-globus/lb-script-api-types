import type { Float2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortFunction.d.ts'
import type { Float2ShortFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ShortFunctions extends Object {
    static EMPTY_FUNCTION: Float2ShortFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: number) => kotlin.Short;
    static singleton(paramarg0: number, paramarg1: number): (param0: number) => kotlin.Short;
    static singleton(paramarg0: number, paramarg1: number): (param0: number) => kotlin.Short;
    static synchronize(paramarg0: (param0: number) => kotlin.Short): (param0: number) => kotlin.Short;
    static synchronize(paramarg0: (param0: number) => kotlin.Short, paramarg1: Object): (param0: number) => kotlin.Short;
    static unmodifiable(paramarg0: (param0: number) => kotlin.Short): (param0: number) => kotlin.Short;
    private constructor()
}