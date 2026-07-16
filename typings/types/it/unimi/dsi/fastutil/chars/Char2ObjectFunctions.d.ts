import type { Char2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectFunction.d.ts'
import type { Char2ObjectFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectFunctions extends Object {
    static EMPTY_FUNCTION: Char2ObjectFunctions$EmptyFunction<Object>;
    static primitive<V extends unknown>(paramarg0: (param0: Object) => V): (param0: string) => V;
    static singleton<V extends unknown>(paramarg0: string, paramarg1: V): (param0: string) => V;
    static synchronize<V extends unknown>(paramarg0: (param0: string) => V): (param0: string) => V;
    static synchronize<V extends unknown>(paramarg0: (param0: string) => V, paramarg1: Object): (param0: string) => V;
    static unmodifiable<V extends unknown>(paramarg0: (param0: string) => V): (param0: string) => V;
    private constructor()
}