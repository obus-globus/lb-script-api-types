import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BigDecimal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/math/BigDecimal.d.ts'
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
    static bigDecimalFrom(paramotherTime: number, paramtimeScale: number): BigDecimal;
    static bigDecimalFrom(paramotherTime: number, paramtimeScale: number): BigDecimal;
    static bigDecimalFrom(paramotherTime: BigDecimal, paramtimeScale: number): BigDecimal;
    static from(paramotherTime: number, paramtimeScale: number): number;
    static getTimeScaleValue(paramscale: number, paramvalue: number): number;
    static toBigDecimal(paramuniversalTime: number, paramtimeScale: number): BigDecimal;
    static toBigDecimal(paramuniversalTime: BigDecimal, paramtimeScale: number): BigDecimal;
    static toBigDecimalTrunc(paramuniversalTime: BigDecimal, paramtimeScale: number): BigDecimal;
    static toLong(paramuniversalTime: number, paramtimeScale: number): number;
    private constructor()
}