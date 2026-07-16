import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class EnumUtil extends Object {
    static getBigBitmaskFromEnumSet<T extends Enum<T>>(paramarg0: T[], paramarg1: (param0: T) => number): BigInteger;
    static getEnumConstantOrNull<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static getEnumSetFromBitmask<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: BigInteger, paramarg2: (param0: T) => number): T[];
    static getEnumSetFromBitmask<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: number, paramarg2: (param0: T) => number): T[];
    static getIntBitmaskFromEnumSet<T extends Enum<T>>(paramarg0: T[], paramarg1: (param0: T) => number): number;
    static getLongBitmaskFromEnumSet<T extends Enum<T>>(paramarg0: T[], paramarg1: (param0: T) => number): number;
    constructor()
}