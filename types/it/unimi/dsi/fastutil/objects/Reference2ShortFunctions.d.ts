import type { Reference2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortFunction.d.ts'
import type { Reference2ShortFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ShortFunctions extends Object {
    static EMPTY_FUNCTION: Reference2ShortFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Short;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object | null) => kotlin.Short;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object | null) => kotlin.Short;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Short): (param0: Object | null) => kotlin.Short;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Short, paramarg1: Object): (param0: Object | null) => kotlin.Short;
    static unmodifiable(paramarg0: (param0: Object | null) => kotlin.Short): (param0: Object | null) => kotlin.Short;
    private constructor()
}