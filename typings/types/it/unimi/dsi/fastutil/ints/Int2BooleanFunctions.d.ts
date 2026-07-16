import type { Int2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanFunction.d.ts'
import type { Int2BooleanFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2BooleanFunctions extends Object {
    static EMPTY_FUNCTION: Int2BooleanFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object) => boolean): (param0: number) => boolean;
    static singleton(paramarg0: number, paramarg1: boolean): (param0: number) => boolean;
    static synchronize(paramarg0: (param0: number) => boolean): (param0: number) => boolean;
    static synchronize(paramarg0: (param0: number) => boolean, paramarg1: Object): (param0: number) => boolean;
    static unmodifiable(paramarg0: (param0: number) => boolean): (param0: number) => boolean;
    private constructor()
}