import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ObjectArrays extends Object {
    static concat(paramarg0: Object | null, paramarg1: (Object | null)[]): (Object | null)[];
    static concat(paramarg0: (Object | null)[], paramarg1: Object | null): (Object | null)[];
    static concat(paramarg0: (Object | null)[], paramarg1: (Object | null)[], paramarg2: Class<Object>): (Object | null)[];
    static newArray(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static newArray(paramarg0: Class<Object>, paramarg1: number): (Object | null)[];
}