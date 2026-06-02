import type { TimeUnit } from '../../../../../../com/ibm/icu/impl/duration/TimeUnit.d.ts'
import type { DataRecord } from '../../../../../../com/ibm/icu/impl/duration/impl/DataRecord.d.ts'
import type { StringBuffer } from '../../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PeriodFormatterData extends Object {
    static trace: boolean;
    constructor(arg0: string, arg1: DataRecord)
    // private dr: DataRecord;
    // private localeName: string;
    allowZero(): boolean;
    appendCount(arg0: TimeUnit, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: string, arg7: boolean, arg8: StringBuffer): number;
    appendCountValue(arg0: number, arg1: number, arg2: number, arg3: StringBuffer): void;
    appendDigits(arg0: number, arg1: number, arg2: number, arg3: StringBuffer): void;
    appendInteger(arg0: number, arg1: number, arg2: number, arg3: StringBuffer): void;
    appendPrefix(arg0: number, arg1: number, arg2: StringBuffer): boolean;
    appendSkippedUnit(arg0: StringBuffer): void;
    appendSuffix(arg0: number, arg1: number, arg2: StringBuffer): void;
    appendUnit(arg0: TimeUnit, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: StringBuffer): boolean;
    appendUnitSeparator(arg0: TimeUnit, arg1: boolean, arg2: boolean, arg3: boolean, arg4: StringBuffer): boolean;
    // private computeForm(arg0: TimeUnit, arg1: number, arg2: number, arg3: boolean): number;
    pluralization(): number;
    useMilliseconds(): number;
    weeksAloneOnly(): boolean;
}