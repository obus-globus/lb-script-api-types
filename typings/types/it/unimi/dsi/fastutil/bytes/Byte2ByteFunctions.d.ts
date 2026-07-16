import type { Byte2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteFunction.d.ts'
import type { Byte2ByteFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ByteFunctions extends Object {
    static EMPTY_FUNCTION: Byte2ByteFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object) => number): (param0: number) => number;
    static singleton(paramarg0: number, paramarg1: number): (param0: number) => number;
    static synchronize(paramarg0: (param0: number) => number): (param0: number) => number;
    static synchronize(paramarg0: (param0: number) => number, paramarg1: Object): (param0: number) => number;
    static unmodifiable(paramarg0: (param0: number) => number): (param0: number) => number;
    private constructor()
}