import type { Char2IntFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntFunction.d.ts'
import type { Char2IntFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2IntFunctions extends Object {
    static EMPTY_FUNCTION: Char2IntFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object) => number): (param0: string) => number;
    static singleton(paramarg0: string, paramarg1: number): (param0: string) => number;
    static synchronize(paramarg0: (param0: string) => number): (param0: string) => number;
    static synchronize(paramarg0: (param0: string) => number, paramarg1: Object): (param0: string) => number;
    static unmodifiable(paramarg0: (param0: string) => number): (param0: string) => number;
    private constructor()
}