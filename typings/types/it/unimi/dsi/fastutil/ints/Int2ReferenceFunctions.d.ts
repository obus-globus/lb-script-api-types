import type { Int2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceFunction.d.ts'
import type { Int2ReferenceFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ReferenceFunctions extends Object {
    static EMPTY_FUNCTION: Int2ReferenceFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object) => Object | null): (param0: number) => Object | null;
    static singleton(paramarg0: number, paramarg1: Object | null): (param0: number) => Object | null;
    static synchronize(paramarg0: (param0: number) => Object | null): (param0: number) => Object | null;
    static synchronize(paramarg0: (param0: number) => Object | null, paramarg1: Object): (param0: number) => Object | null;
    static unmodifiable(paramarg0: (param0: number) => Object | null): (param0: number) => Object | null;
    private constructor()
}