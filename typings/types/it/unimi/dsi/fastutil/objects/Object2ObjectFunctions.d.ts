import type { Object2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectFunction.d.ts'
import type { Object2ObjectFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectFunctions$EmptyFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectFunctions extends Object {
    static EMPTY_FUNCTION: Object2ObjectFunctions$EmptyFunction<Object, Object>;
    static singleton<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): (param0: Object) => V;
    static synchronize<K extends unknown, V extends unknown>(paramarg0: (param0: Object) => V): (param0: Object) => V;
    static synchronize<K extends unknown, V extends unknown>(paramarg0: (param0: Object) => V, paramarg1: Object): (param0: Object) => V;
    static unmodifiable<K extends unknown, V extends unknown>(paramarg0: (param0: Object) => V): (param0: Object) => V;
    private constructor()
}