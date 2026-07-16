import type { Byte2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortFunction.d.ts'
import type { Byte2ShortFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ShortFunctions extends Object {
    static EMPTY_FUNCTION: Byte2ShortFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object) => number): (param0: number) => number;
    static singleton(paramarg0: number, paramarg1: number): (param0: number) => number;
    static synchronize(paramarg0: (param0: number) => number): (param0: number) => number;
    static synchronize(paramarg0: (param0: number) => number, paramarg1: Object): (param0: number) => number;
    static unmodifiable(paramarg0: (param0: number) => number): (param0: number) => number;
    private constructor()
}