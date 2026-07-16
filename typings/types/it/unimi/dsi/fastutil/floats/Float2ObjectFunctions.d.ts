import type { Float2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectFunction.d.ts'
import type { Float2ObjectFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectFunctions extends Object {
    static EMPTY_FUNCTION: Float2ObjectFunctions$EmptyFunction<Object>;
    static primitive<V extends unknown>(paramarg0: (param0: Object) => V): (param0: number) => V;
    static singleton<V extends unknown>(paramarg0: number, paramarg1: V): (param0: number) => V;
    static synchronize<V extends unknown>(paramarg0: (param0: number) => V): (param0: number) => V;
    static synchronize<V extends unknown>(paramarg0: (param0: number) => V, paramarg1: Object): (param0: number) => V;
    static unmodifiable<V extends unknown>(paramarg0: (param0: number) => V): (param0: number) => V;
    private constructor()
}