import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalUtil$Unit extends Enum<TemporalUtil$Unit> {
    static AUTO: TemporalUtil$Unit;
    static DAY: TemporalUtil$Unit;
    static EMPTY: TemporalUtil$Unit;
    static HOUR: TemporalUtil$Unit;
    static MICROSECOND: TemporalUtil$Unit;
    static MILLISECOND: TemporalUtil$Unit;
    static MINUTE: TemporalUtil$Unit;
    static MONTH: TemporalUtil$Unit;
    static NANOSECOND: TemporalUtil$Unit;
    static REQUIRED: TemporalUtil$Unit;
    static SECOND: TemporalUtil$Unit;
    static VALUES: TemporalUtil$Unit[];
    static WEEK: TemporalUtil$Unit;
    static YEAR: TemporalUtil$Unit;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TemporalUtil$Unit;
    static values(): TemporalUtil$Unit[];
    private constructor(name: TruffleString)
    // private name: TruffleString;
    getLengthInNanoseconds(): number;
    isCalendarUnit(): boolean;
    isDateUnit(): boolean;
    isTimeUnit(): boolean;
    toTruffleString(): TruffleString;
    name(): "EMPTY" | "AUTO" | "YEAR" | "MONTH" | "WEEK" | "DAY" | "HOUR" | "MINUTE" | "SECOND" | "MILLISECOND" | "MICROSECOND" | "NANOSECOND";
}