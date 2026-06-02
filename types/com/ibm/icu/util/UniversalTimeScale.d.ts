import type { BigDecimal } from '../../../../com/ibm/icu/math/BigDecimal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UniversalTimeScale extends Object {
    static DB2_TIME: number;
    static DOTNET_DATE_TIME: number;
    static EPOCH_OFFSET_MINUS_1_VALUE: number;
    static EPOCH_OFFSET_PLUS_1_VALUE: number;
    static EPOCH_OFFSET_VALUE: number;
    static EXCEL_TIME: number;
    static FROM_MAX_VALUE: number;
    static FROM_MIN_VALUE: number;
    static ICU4C_TIME: number;
    static JAVA_TIME: number;
    static MAC_OLD_TIME: number;
    static MAC_TIME: number;
    static MAX_ROUND_VALUE: number;
    static MAX_SCALE: number;
    static MAX_SCALE_VALUE: number;
    static MIN_ROUND_VALUE: number;
    static TO_MAX_VALUE: number;
    static TO_MIN_VALUE: number;
    static UNITS_ROUND_VALUE: number;
    static UNITS_VALUE: number;
    static UNIX_MICROSECONDS_TIME: number;
    static UNIX_TIME: number;
    static WINDOWS_FILE_TIME: number;
    static bigDecimalFrom(paramarg0: BigDecimal, paramarg1: number): BigDecimal;
    static bigDecimalFrom(paramarg0: number, paramarg1: number): BigDecimal;
    static bigDecimalFrom(paramarg0: number, paramarg1: number): BigDecimal;
    static from(paramarg0: number, paramarg1: number): number;
    static getTimeScaleValue(paramarg0: number, paramarg1: number): number;
    static toBigDecimal(paramarg0: BigDecimal, paramarg1: number): BigDecimal;
    static toBigDecimal(paramarg0: number, paramarg1: number): BigDecimal;
    static toBigDecimalTrunc(paramarg0: BigDecimal, paramarg1: number): BigDecimal;
    static toLong(paramarg0: number, paramarg1: number): number;
    private constructor()
}