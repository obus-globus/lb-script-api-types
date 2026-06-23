import type { WbemcliUtil$WmiQuery } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiQuery.d.ts'
import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { OffsetDateTime } from '../../../../java/time/OffsetDateTime.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WmiUtil extends Object {
    static OHM_NAMESPACE: string;
    static getDateString(paramarg0: WbemcliUtil$WmiResult<any>, paramarg1: Object | null, paramarg2: number): string;
    static getDateTime(paramarg0: WbemcliUtil$WmiResult<any>, paramarg1: Object | null, paramarg2: number): OffsetDateTime;
    static getFloat(paramarg0: WbemcliUtil$WmiResult<any>, paramarg1: Object | null, paramarg2: number): number;
    static getRefString(paramarg0: WbemcliUtil$WmiResult<any>, paramarg1: Object | null, paramarg2: number): string;
    static getSint32(paramarg0: WbemcliUtil$WmiResult<any>, paramarg1: Object | null, paramarg2: number): number;
    static getString(paramarg0: WbemcliUtil$WmiResult<any>, paramarg1: Object | null, paramarg2: number): string;
    static getUint16(paramarg0: WbemcliUtil$WmiResult<any>, paramarg1: Object | null, paramarg2: number): number;
    static getUint32(paramarg0: WbemcliUtil$WmiResult<any>, paramarg1: Object | null, paramarg2: number): number;
    static getUint32asLong(paramarg0: WbemcliUtil$WmiResult<any>, paramarg1: Object | null, paramarg2: number): number;
    static getUint64(paramarg0: WbemcliUtil$WmiResult<any>, paramarg1: Object | null, paramarg2: number): number;
    static queryToString(paramarg0: WbemcliUtil$WmiQuery<any>): string;
    private constructor()
}