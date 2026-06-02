import type { StringBuffer } from '../../../../../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { TimeUnit } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/TimeUnit.d.ts'
import type { DataRecord } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/impl/DataRecord.d.ts'
export class PeriodFormatterData extends Object {
    static trace: boolean;
    constructor(localeName: string, dr: DataRecord)
    // private dr: DataRecord;
    // private localeName: string;
    allowZero(): boolean;
    appendCount(unit: TimeUnit, omitCount: boolean, useDigitPrefix: boolean, count: number, cv: number, useSep: boolean, name: string, last: boolean, sb: StringBuffer): number;
    appendCountValue(count: number, integralDigits: number, decimalDigits: number, sb: StringBuffer): void;
    appendDigits(num: number, mindigits: number, maxdigits: number, sb: StringBuffer): void;
    appendInteger(num: number, mindigits: number, maxdigits: number, sb: StringBuffer): void;
    appendPrefix(tl: number, td: number, sb: StringBuffer): boolean;
    appendSkippedUnit(sb: StringBuffer): void;
    appendSuffix(tl: number, td: number, sb: StringBuffer): void;
    appendUnit(unit: TimeUnit, count: number, cv: number, uv: number, useCountSep: boolean, useDigitPrefix: boolean, multiple: boolean, last: boolean, wasSkipped: boolean, sb: StringBuffer): boolean;
    appendUnitSeparator(unit: TimeUnit, longSep: boolean, afterFirst: boolean, beforeLast: boolean, sb: StringBuffer): boolean;
    // private computeForm(unit: TimeUnit, count: number, cv: number, lastOfMultiple: boolean): number;
    pluralization(): number;
    useMilliseconds(): number;
    weeksAloneOnly(): boolean;
}