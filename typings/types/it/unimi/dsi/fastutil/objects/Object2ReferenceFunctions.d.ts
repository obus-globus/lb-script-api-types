import type { Object2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceFunction.d.ts'
import type { Object2ReferenceFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceFunctions$EmptyFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceFunctions extends Object {
    static EMPTY_FUNCTION: Object2ReferenceFunctions$EmptyFunction<Object, Object>;
    static singleton<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): (param0: Object) => V;
    static synchronize<K extends unknown, V extends unknown>(paramarg0: (param0: Object) => V): (param0: Object) => V;
    static synchronize<K extends unknown, V extends unknown>(paramarg0: (param0: Object) => V, paramarg1: Object): (param0: Object) => V;
    static unmodifiable<K extends unknown, V extends unknown>(paramarg0: (param0: Object) => V): (param0: Object) => V;
    private constructor()
}