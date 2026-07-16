import type { Float2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectFunction.d.ts'
import type { Float2ObjectFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectFunctions extends Object {
    static EMPTY_FUNCTION: Float2ObjectFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object) => Object | null): (param0: number) => Object | null;
    static singleton(paramarg0: number, paramarg1: Object | null): (param0: number) => Object | null;
    static synchronize(paramarg0: (param0: number) => Object | null): (param0: number) => Object | null;
    static synchronize(paramarg0: (param0: number) => Object | null, paramarg1: Object): (param0: number) => Object | null;
    static unmodifiable(paramarg0: (param0: number) => Object | null): (param0: number) => Object | null;
    private constructor()
}