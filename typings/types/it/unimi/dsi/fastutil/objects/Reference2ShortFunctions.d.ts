import type { Reference2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortFunction.d.ts'
import type { Reference2ShortFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ShortFunctions extends Object {
    static EMPTY_FUNCTION: Reference2ShortFunctions$EmptyFunction<Object>;
    static primitive<K extends unknown>(paramarg0: (param0: Object) => number): (param0: Object) => number;
    static singleton<K extends unknown>(paramarg0: K, paramarg1: number): (param0: Object) => number;
    static synchronize<K extends unknown>(paramarg0: (param0: Object) => number): (param0: Object) => number;
    static synchronize<K extends unknown>(paramarg0: (param0: Object) => number, paramarg1: Object): (param0: Object) => number;
    static unmodifiable<K extends unknown>(paramarg0: (param0: Object) => number): (param0: Object) => number;
    private constructor()
}