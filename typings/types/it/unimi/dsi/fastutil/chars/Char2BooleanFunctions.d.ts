import type { Char2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanFunction.d.ts'
import type { Char2BooleanFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2BooleanFunctions extends Object {
    static EMPTY_FUNCTION: Char2BooleanFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object) => boolean): (param0: string) => boolean;
    static singleton(paramarg0: string, paramarg1: boolean): (param0: string) => boolean;
    static synchronize(paramarg0: (param0: string) => boolean): (param0: string) => boolean;
    static synchronize(paramarg0: (param0: string) => boolean, paramarg1: Object): (param0: string) => boolean;
    static unmodifiable(paramarg0: (param0: string) => boolean): (param0: string) => boolean;
    private constructor()
}