import type { Reference2LongFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongFunction.d.ts'
import type { Reference2LongFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2LongFunctions extends Object {
    static EMPTY_FUNCTION: Reference2LongFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Long;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object | null) => kotlin.Long;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object | null) => kotlin.Long;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Long): (param0: Object | null) => kotlin.Long;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Long, paramarg1: Object): (param0: Object | null) => kotlin.Long;
    static unmodifiable(paramarg0: (param0: Object | null) => kotlin.Long): (param0: Object | null) => kotlin.Long;
    private constructor()
}