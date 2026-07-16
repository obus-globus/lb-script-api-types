import type { Char2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceFunction.d.ts'
import type { Char2ReferenceFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceFunctions extends Object {
    static EMPTY_FUNCTION: Char2ReferenceFunctions$EmptyFunction<Object>;
    static primitive<V extends unknown>(paramarg0: (param0: Object) => V): (param0: string) => V;
    static singleton<V extends unknown>(paramarg0: string, paramarg1: V): (param0: string) => V;
    static synchronize<V extends unknown>(paramarg0: (param0: string) => V): (param0: string) => V;
    static synchronize<V extends unknown>(paramarg0: (param0: string) => V, paramarg1: Object): (param0: string) => V;
    static unmodifiable<V extends unknown>(paramarg0: (param0: string) => V): (param0: string) => V;
    private constructor()
}