import type { WbemcliUtil$WmiQuery } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiQuery.d.ts'
import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { OffsetDateTime } from '../../../../java/time/OffsetDateTime.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class WmiUtil extends Object {
    static OHM_NAMESPACE: string;
    static getDateString<T extends Enum<T>>(paramarg0: WbemcliUtil$WmiResult<T>, paramarg1: T, paramarg2: number): string;
    static getDateTime<T extends Enum<T>>(paramarg0: WbemcliUtil$WmiResult<T>, paramarg1: T, paramarg2: number): OffsetDateTime;
    static getFloat<T extends Enum<T>>(paramarg0: WbemcliUtil$WmiResult<T>, paramarg1: T, paramarg2: number): number;
    static getRefString<T extends Enum<T>>(paramarg0: WbemcliUtil$WmiResult<T>, paramarg1: T, paramarg2: number): string;
    static getSint32<T extends Enum<T>>(paramarg0: WbemcliUtil$WmiResult<T>, paramarg1: T, paramarg2: number): number;
    static getString<T extends Enum<T>>(paramarg0: WbemcliUtil$WmiResult<T>, paramarg1: T, paramarg2: number): string;
    static getUint16<T extends Enum<T>>(paramarg0: WbemcliUtil$WmiResult<T>, paramarg1: T, paramarg2: number): number;
    static getUint32<T extends Enum<T>>(paramarg0: WbemcliUtil$WmiResult<T>, paramarg1: T, paramarg2: number): number;
    static getUint32asLong<T extends Enum<T>>(paramarg0: WbemcliUtil$WmiResult<T>, paramarg1: T, paramarg2: number): number;
    static getUint64<T extends Enum<T>>(paramarg0: WbemcliUtil$WmiResult<T>, paramarg1: T, paramarg2: number): number;
    static queryToString<T extends Enum<T>>(paramarg0: WbemcliUtil$WmiQuery<T>): string;
    private constructor()
}