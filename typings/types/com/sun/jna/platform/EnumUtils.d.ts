import type { FlagEnum } from '../../../../com/sun/jna/platform/win32/FlagEnum.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EnumUtils extends Object {
    static UNINITIALIZED: number;
    static fromInteger(paramarg0: number, paramarg1: Class<Object>): Object | null;
    static setFromInteger(paramarg0: number, paramarg1: Class<FlagEnum>): (FlagEnum | null)[];
    static setToInteger(paramarg0: (FlagEnum | null)[]): number;
    static toInteger(paramarg0: Object | null): number;
    constructor()
}