import type { Char2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanFunction.d.ts'
import type { Char2BooleanFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2BooleanFunctions extends Object {
    static EMPTY_FUNCTION: Char2BooleanFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: string) => kotlin.Boolean;
    static singleton(paramarg0: string, paramarg1: boolean): (param0: string) => kotlin.Boolean;
    static singleton(paramarg0: string, paramarg1: boolean): (param0: string) => kotlin.Boolean;
    static synchronize(paramarg0: (param0: string) => kotlin.Boolean): (param0: string) => kotlin.Boolean;
    static synchronize(paramarg0: (param0: string) => kotlin.Boolean, paramarg1: Object): (param0: string) => kotlin.Boolean;
    static unmodifiable(paramarg0: (param0: string) => kotlin.Boolean): (param0: string) => kotlin.Boolean;
    private constructor()
}