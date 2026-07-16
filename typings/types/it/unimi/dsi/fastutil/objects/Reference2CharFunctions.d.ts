import type { Reference2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharFunction.d.ts'
import type { Reference2CharFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2CharFunctions extends Object {
    static EMPTY_FUNCTION: Reference2CharFunctions$EmptyFunction<Object>;
    static primitive<K extends unknown>(paramarg0: (param0: Object) => string): (param0: Object) => string;
    static singleton<K extends unknown>(paramarg0: K, paramarg1: string): (param0: Object) => string;
    static synchronize<K extends unknown>(paramarg0: (param0: Object) => string): (param0: Object) => string;
    static synchronize<K extends unknown>(paramarg0: (param0: Object) => string, paramarg1: Object): (param0: Object) => string;
    static unmodifiable<K extends unknown>(paramarg0: (param0: Object) => string): (param0: Object) => string;
    private constructor()
}