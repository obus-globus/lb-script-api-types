import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { TimeUnit } from '../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class DurationUnit extends Enum<DurationUnit> implements Serializable {
    static DAYS: DurationUnit;
    static HOURS: DurationUnit;
    static MICROSECONDS: DurationUnit;
    static MILLISECONDS: DurationUnit;
    static MINUTES: DurationUnit;
    static NANOSECONDS: DurationUnit;
    static SECONDS: DurationUnit;
    static getEntries(): DurationUnit[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DurationUnit;
    static values(): DurationUnit[];
    private constructor(timeUnit: TimeUnit)
    // private timeUnit: TimeUnit;
    /*not mapped: */ getTimeUnit$kotlin_stdlib(): TimeUnit;
    name(): "NANOSECONDS" | "MICROSECONDS" | "MILLISECONDS" | "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
}