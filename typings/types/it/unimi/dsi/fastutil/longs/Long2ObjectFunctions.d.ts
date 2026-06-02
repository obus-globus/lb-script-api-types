import type { Long2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectFunction.d.ts'
import type { Long2ObjectFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ObjectFunctions extends Object {
    static EMPTY_FUNCTION: Long2ObjectFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => unknown;
    static singleton(paramarg0: number, paramarg1: Object | null): (param0: Object | null) => unknown;
    static singleton(paramarg0: number, paramarg1: Object | null): (param0: Object | null) => unknown;
    static synchronize(paramarg0: (param0: Object | null) => unknown): (param0: Object | null) => unknown;
    static synchronize(paramarg0: (param0: Object | null) => unknown, paramarg1: Object): (param0: Object | null) => unknown;
    static unmodifiable(paramarg0: (param0: Object | null) => unknown): (param0: Object | null) => unknown;
    private constructor()
}