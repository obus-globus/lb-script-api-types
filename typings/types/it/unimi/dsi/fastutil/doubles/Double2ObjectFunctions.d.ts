import type { Double2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectFunction.d.ts'
import type { Double2ObjectFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ObjectFunctions extends Object {
    static EMPTY_FUNCTION: Double2ObjectFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object) => Object | null): (param0: number) => Object | null;
    static singleton(paramarg0: number, paramarg1: Object | null): (param0: number) => Object | null;
    static singleton(paramarg0: number, paramarg1: Object | null): (param0: number) => Object | null;
    static synchronize(paramarg0: (param0: number) => Object | null): (param0: number) => Object | null;
    static synchronize(paramarg0: (param0: number) => Object | null, paramarg1: Object): (param0: number) => Object | null;
    static unmodifiable(paramarg0: (param0: number) => Object | null): (param0: number) => Object | null;
    private constructor()
}