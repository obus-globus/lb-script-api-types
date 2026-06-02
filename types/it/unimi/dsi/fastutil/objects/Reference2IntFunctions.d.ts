import type { Reference2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntFunction.d.ts'
import type { Reference2IntFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2IntFunctions extends Object {
    static EMPTY_FUNCTION: Reference2IntFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Int;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object | null) => kotlin.Int;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object | null) => kotlin.Int;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Int): (param0: Object | null) => kotlin.Int;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Int, paramarg1: Object): (param0: Object | null) => kotlin.Int;
    static unmodifiable(paramarg0: (param0: Object | null) => kotlin.Int): (param0: Object | null) => kotlin.Int;
    private constructor()
}