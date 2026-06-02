import type { Char2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteFunction.d.ts'
import type { Char2ByteFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ByteFunctions extends Object {
    static EMPTY_FUNCTION: Char2ByteFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: string) => kotlin.Byte;
    static singleton(paramarg0: string, paramarg1: number): (param0: string) => kotlin.Byte;
    static singleton(paramarg0: string, paramarg1: number): (param0: string) => kotlin.Byte;
    static synchronize(paramarg0: (param0: string) => kotlin.Byte): (param0: string) => kotlin.Byte;
    static synchronize(paramarg0: (param0: string) => kotlin.Byte, paramarg1: Object): (param0: string) => kotlin.Byte;
    static unmodifiable(paramarg0: (param0: string) => kotlin.Byte): (param0: string) => kotlin.Byte;
    private constructor()
}