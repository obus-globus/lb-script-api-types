import type { Char2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectFunction.d.ts'
import type { Char2ObjectFunctions$EmptyFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectFunctions$EmptyFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectFunctions extends Object {
    static EMPTY_FUNCTION: Char2ObjectFunctions$EmptyFunction<Object>;
    static primitive(paramarg0: (param0: Object) => Object | null): (param0: string) => Object | null;
    static singleton(paramarg0: string, paramarg1: Object | null): (param0: string) => Object | null;
    static singleton(paramarg0: string, paramarg1: Object | null): (param0: string) => Object | null;
    static synchronize(paramarg0: (param0: string) => Object | null): (param0: string) => Object | null;
    static synchronize(paramarg0: (param0: string) => Object | null, paramarg1: Object): (param0: string) => Object | null;
    static unmodifiable(paramarg0: (param0: string) => Object | null): (param0: string) => Object | null;
    private constructor()
}