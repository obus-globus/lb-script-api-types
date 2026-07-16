import type { FlagEnum } from '../../../../com/sun/jna/platform/win32/FlagEnum.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EnumUtils extends Object {
    static UNINITIALIZED: number;
    static fromInteger<E extends Enum<E>>(paramarg0: number, paramarg1: Class<E>): E;
    static setFromInteger<T extends FlagEnum>(paramarg0: number, paramarg1: Class<T>): T[];
    static setToInteger<T extends FlagEnum>(paramarg0: T[]): number;
    static toInteger<E extends Enum<E>>(paramarg0: E): number;
    constructor()
}