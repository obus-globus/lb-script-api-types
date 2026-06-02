import type { Object2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharFunction.d.ts'
import type { Object2CharFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharFunctions extends Object {
    static EMPTY_FUNCTION: Object2CharFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Char;
    static singleton(paramarg0: Object | null, paramarg1: string): (param0: Object | null) => kotlin.Char;
    static singleton(paramarg0: Object | null, paramarg1: string): (param0: Object | null) => kotlin.Char;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Char): (param0: Object | null) => kotlin.Char;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Char, paramarg1: Object): (param0: Object | null) => kotlin.Char;
    static unmodifiable(paramarg0: (param0: Object | null) => kotlin.Char): (param0: Object | null) => kotlin.Char;
    private constructor()
}