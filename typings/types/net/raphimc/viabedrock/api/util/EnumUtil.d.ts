import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EnumUtil extends Object {
    static getBigBitmaskFromEnumSet(paramarg0: (Object | null)[], paramarg1: (param0: Object | null) => kotlin.Int): BigInteger;
    static getEnumConstantOrNull(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static getEnumSetFromBitmask(paramarg0: Class<Object>, paramarg1: BigInteger, paramarg2: (param0: Object | null) => kotlin.Int): (Object | null)[];
    static getEnumSetFromBitmask(paramarg0: Class<Object>, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Int): (Object | null)[];
    static getIntBitmaskFromEnumSet(paramarg0: (Object | null)[], paramarg1: (param0: Object | null) => kotlin.Int): number;
    static getLongBitmaskFromEnumSet(paramarg0: (Object | null)[], paramarg1: (param0: Object | null) => kotlin.Int): number;
    constructor()
}