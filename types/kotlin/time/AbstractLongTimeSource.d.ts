import type { Object } from '../../java/lang/Object.d.ts'
import type { ComparableTimeMark } from '../../kotlin/time/ComparableTimeMark.d.ts'
import type { DurationUnit } from '../../kotlin/time/DurationUnit.d.ts'
import type { TimeSource$Companion } from '../../kotlin/time/TimeSource$Companion.d.ts'
import type { TimeSource$WithComparableMarks } from '../../kotlin/time/TimeSource$WithComparableMarks.d.ts'
export abstract class AbstractLongTimeSource extends Object implements TimeSource$WithComparableMarks {
    static Companion: TimeSource$Companion;
    constructor(unit: DurationUnit)
    // private unit: DurationUnit;
    // private /*not mapped: */ getUnit(): DurationUnit;
    // private zero: number;
    // private /*not mapped: */ getZero(): number;
    // private adjustedRead(): number;
    markNow(): ComparableTimeMark;
    protected read(): number;
}