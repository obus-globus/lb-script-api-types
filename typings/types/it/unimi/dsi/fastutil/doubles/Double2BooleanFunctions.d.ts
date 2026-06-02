import type { Double2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanFunction.d.ts'
import type { Double2BooleanFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2BooleanFunctions extends Object {
    static EMPTY_FUNCTION: Double2BooleanFunctions$EmptyFunction;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: number) => kotlin.Boolean;
    static singleton(paramarg0: number, paramarg1: boolean): (param0: number) => kotlin.Boolean;
    static singleton(paramarg0: number, paramarg1: boolean): (param0: number) => kotlin.Boolean;
    static synchronize(paramarg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
    static synchronize(paramarg0: (param0: number) => kotlin.Boolean, paramarg1: Object): (param0: number) => kotlin.Boolean;
    static unmodifiable(paramarg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
    private constructor()
}