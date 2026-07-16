import type { Reference2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceFunction.d.ts'
import type { Reference2ReferenceFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceFunctions$EmptyFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ReferenceFunctions extends Object {
    static EMPTY_FUNCTION: Reference2ReferenceFunctions$EmptyFunction<Object, Object>;
    static singleton<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): (param0: Object) => V;
    static synchronize<K extends unknown, V extends unknown>(paramarg0: (param0: Object) => V): (param0: Object) => V;
    static synchronize<K extends unknown, V extends unknown>(paramarg0: (param0: Object) => V, paramarg1: Object): (param0: Object) => V;
    static unmodifiable<K extends unknown, V extends unknown>(paramarg0: (param0: Object) => V): (param0: Object) => V;
    private constructor()
}