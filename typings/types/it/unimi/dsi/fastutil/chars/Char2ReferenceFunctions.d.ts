import type { Char2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceFunction.d.ts'
import type { Char2ReferenceFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceFunctions extends Object {
    static EMPTY_FUNCTION: Char2ReferenceFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object) => Object | null): (param0: string) => Object | null;
    static singleton(paramarg0: string, paramarg1: Object | null): (param0: string) => Object | null;
    static singleton(paramarg0: string, paramarg1: Object | null): (param0: string) => Object | null;
    static synchronize(paramarg0: (param0: string) => Object | null): (param0: string) => Object | null;
    static synchronize(paramarg0: (param0: string) => Object | null, paramarg1: Object): (param0: string) => Object | null;
    static unmodifiable(paramarg0: (param0: string) => Object | null): (param0: string) => Object | null;
    private constructor()
}