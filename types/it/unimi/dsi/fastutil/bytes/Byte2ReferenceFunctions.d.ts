import type { Byte2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceFunction.d.ts'
import type { Byte2ReferenceFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ReferenceFunctions extends Object {
    static EMPTY_FUNCTION: Byte2ReferenceFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => unknown;
    static singleton(paramarg0: number, paramarg1: Object | null): (param0: Object | null) => unknown;
    static singleton(paramarg0: number, paramarg1: Object | null): (param0: Object | null) => unknown;
    static synchronize(paramarg0: (param0: Object | null) => unknown): (param0: Object | null) => unknown;
    static synchronize(paramarg0: (param0: Object | null) => unknown, paramarg1: Object): (param0: Object | null) => unknown;
    static unmodifiable(paramarg0: (param0: Object | null) => unknown): (param0: Object | null) => unknown;
    private constructor()
}