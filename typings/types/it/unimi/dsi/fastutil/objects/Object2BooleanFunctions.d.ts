import type { Object2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanFunction.d.ts'
import type { Object2BooleanFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanFunctions extends Object {
    static EMPTY_FUNCTION: Object2BooleanFunctions$EmptyFunction<Object>;
    static primitive<K extends unknown>(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static singleton<K extends unknown>(paramarg0: K, paramarg1: boolean): (param0: Object) => boolean;
    static synchronize<K extends unknown>(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static synchronize<K extends unknown>(paramarg0: (param0: Object) => boolean, paramarg1: Object): (param0: Object) => boolean;
    static unmodifiable<K extends unknown>(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    private constructor()
}