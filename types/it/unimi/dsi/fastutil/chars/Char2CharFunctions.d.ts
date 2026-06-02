import type { Char2CharFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharFunction.d.ts'
import type { Char2CharFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2CharFunctions extends Object {
    static EMPTY_FUNCTION: Char2CharFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: string) => kotlin.Char;
    static singleton(paramarg0: string, paramarg1: string): (param0: string) => kotlin.Char;
    static singleton(paramarg0: string, paramarg1: string): (param0: string) => kotlin.Char;
    static synchronize(paramarg0: (param0: string) => kotlin.Char): (param0: string) => kotlin.Char;
    static synchronize(paramarg0: (param0: string) => kotlin.Char, paramarg1: Object): (param0: string) => kotlin.Char;
    static unmodifiable(paramarg0: (param0: string) => kotlin.Char): (param0: string) => kotlin.Char;
    private constructor()
}