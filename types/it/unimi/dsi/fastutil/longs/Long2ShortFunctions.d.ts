import type { Long2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortFunction.d.ts'
import type { Long2ShortFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ShortFunctions extends Object {
    static EMPTY_FUNCTION: Long2ShortFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: number) => kotlin.Short;
    static singleton(paramarg0: number, paramarg1: number): (param0: number) => kotlin.Short;
    static singleton(paramarg0: number, paramarg1: number): (param0: number) => kotlin.Short;
    static synchronize(paramarg0: (param0: number) => kotlin.Short): (param0: number) => kotlin.Short;
    static synchronize(paramarg0: (param0: number) => kotlin.Short, paramarg1: Object): (param0: number) => kotlin.Short;
    static unmodifiable(paramarg0: (param0: number) => kotlin.Short): (param0: number) => kotlin.Short;
    private constructor()
}