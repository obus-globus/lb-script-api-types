import type { Char2CharFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharFunction.d.ts'
import type { Char2CharFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2CharFunctions extends Object {
    static EMPTY_FUNCTION: Char2CharFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object) => string): (param0: string) => string;
    static singleton(paramarg0: string, paramarg1: string): (param0: string) => string;
    static singleton(paramarg0: string, paramarg1: string): (param0: string) => string;
    static synchronize(paramarg0: (param0: string) => string): (param0: string) => string;
    static synchronize(paramarg0: (param0: string) => string, paramarg1: Object): (param0: string) => string;
    static unmodifiable(paramarg0: (param0: string) => string): (param0: string) => string;
    private constructor()
}