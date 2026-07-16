import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ObjectArrays extends Object {
    static concat(paramelement: Object | null, paramarray: (Object | null)[]): (Object | null)[];
    static concat(paramarray: (Object | null)[], paramelement: Object | null): (Object | null)[];
    static concat(paramfirst: (Object | null)[], paramsecond: (Object | null)[], paramtype: Class<Object>): (Object | null)[];
    static newArray(paramreference: (Object | null)[], paramlength: number): (Object | null)[];
    static newArray(paramtype: Class<Object>, paramlength: number): (Object | null)[];
    private constructor()
}