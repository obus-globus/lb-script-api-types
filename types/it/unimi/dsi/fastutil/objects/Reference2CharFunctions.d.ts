import type { Reference2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharFunction.d.ts'
import type { Reference2CharFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2CharFunctions extends Object {
    static EMPTY_FUNCTION: Reference2CharFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Char;
    static singleton(paramarg0: Object | null, paramarg1: string): (param0: Object | null) => kotlin.Char;
    static singleton(paramarg0: Object | null, paramarg1: string): (param0: Object | null) => kotlin.Char;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Char): (param0: Object | null) => kotlin.Char;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Char, paramarg1: Object): (param0: Object | null) => kotlin.Char;
    static unmodifiable(paramarg0: (param0: Object | null) => kotlin.Char): (param0: Object | null) => kotlin.Char;
    private constructor()
}