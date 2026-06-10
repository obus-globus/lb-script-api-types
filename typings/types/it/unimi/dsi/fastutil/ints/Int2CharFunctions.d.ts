import type { Int2CharFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharFunction.d.ts'
import type { Int2CharFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2CharFunctions extends Object {
    static EMPTY_FUNCTION: Int2CharFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object) => string): (param0: number) => string;
    static singleton(paramarg0: number, paramarg1: string): (param0: number) => string;
    static singleton(paramarg0: number, paramarg1: string): (param0: number) => string;
    static synchronize(paramarg0: (param0: number) => string): (param0: number) => string;
    static synchronize(paramarg0: (param0: number) => string, paramarg1: Object): (param0: number) => string;
    static unmodifiable(paramarg0: (param0: number) => string): (param0: number) => string;
    private constructor()
}