import type { Object2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteFunction.d.ts'
import type { Object2ByteFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ByteFunctions extends Object {
    static EMPTY_FUNCTION: Object2ByteFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Byte;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object | null) => kotlin.Byte;
    static singleton(paramarg0: Object | null, paramarg1: number): (param0: Object | null) => kotlin.Byte;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Byte): (param0: Object | null) => kotlin.Byte;
    static synchronize(paramarg0: (param0: Object | null) => kotlin.Byte, paramarg1: Object): (param0: Object | null) => kotlin.Byte;
    static unmodifiable(paramarg0: (param0: Object | null) => kotlin.Byte): (param0: Object | null) => kotlin.Byte;
    private constructor()
}