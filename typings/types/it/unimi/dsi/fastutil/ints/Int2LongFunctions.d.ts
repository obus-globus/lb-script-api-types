import type { Int2LongFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongFunction.d.ts'
import type { Int2LongFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2LongFunctions extends Object {
    static EMPTY_FUNCTION: Int2LongFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: number) => kotlin.Long;
    static singleton(paramarg0: number, paramarg1: number): (param0: number) => kotlin.Long;
    static singleton(paramarg0: number, paramarg1: number): (param0: number) => kotlin.Long;
    static synchronize(paramarg0: (param0: number) => kotlin.Long): (param0: number) => kotlin.Long;
    static synchronize(paramarg0: (param0: number) => kotlin.Long, paramarg1: Object): (param0: number) => kotlin.Long;
    static unmodifiable(paramarg0: (param0: number) => kotlin.Long): (param0: number) => kotlin.Long;
    private constructor()
}