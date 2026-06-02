import type { Float2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceFunction.d.ts'
import type { Float2ReferenceFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceFunctions extends Object {
    static EMPTY_FUNCTION: Float2ReferenceFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => unknown;
    static singleton(paramarg0: number, paramarg1: Object | null): (param0: Object | null) => unknown;
    static singleton(paramarg0: number, paramarg1: Object | null): (param0: Object | null) => unknown;
    static synchronize(paramarg0: (param0: Object | null) => unknown): (param0: Object | null) => unknown;
    static synchronize(paramarg0: (param0: Object | null) => unknown, paramarg1: Object): (param0: Object | null) => unknown;
    static unmodifiable(paramarg0: (param0: Object | null) => unknown): (param0: Object | null) => unknown;
    private constructor()
}