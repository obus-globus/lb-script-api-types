import type { Short2CharFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharFunction.d.ts'
import type { Short2CharFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2CharFunctions extends Object {
    static EMPTY_FUNCTION: Short2CharFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object) => string): (param0: number) => string;
    static singleton(paramarg0: number, paramarg1: string): (param0: number) => string;
    static synchronize(paramarg0: (param0: number) => string): (param0: number) => string;
    static synchronize(paramarg0: (param0: number) => string, paramarg1: Object): (param0: number) => string;
    static unmodifiable(paramarg0: (param0: number) => string): (param0: number) => string;
    private constructor()
}