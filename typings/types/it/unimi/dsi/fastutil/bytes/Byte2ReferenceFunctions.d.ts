import type { Byte2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceFunction.d.ts'
import type { Byte2ReferenceFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ReferenceFunctions extends Object {
    static EMPTY_FUNCTION: Byte2ReferenceFunctions$EmptyFunction<Object>;
    static primitive<V extends unknown>(paramarg0: (param0: Object) => V): (param0: number) => V;
    static singleton<V extends unknown>(paramarg0: number, paramarg1: V): (param0: number) => V;
    static synchronize<V extends unknown>(paramarg0: (param0: number) => V): (param0: number) => V;
    static synchronize<V extends unknown>(paramarg0: (param0: number) => V, paramarg1: Object): (param0: number) => V;
    static unmodifiable<V extends unknown>(paramarg0: (param0: number) => V): (param0: number) => V;
    private constructor()
}