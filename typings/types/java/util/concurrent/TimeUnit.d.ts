import type { Class } from '../../../java/lang/Class.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { ChronoUnit } from '../../../java/time/temporal/ChronoUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class TimeUnit extends Enum<TimeUnit> {
    static DAYS: TimeUnit;
    static HOURS: TimeUnit;
    static MICROSECONDS: TimeUnit;
    static MILLISECONDS: TimeUnit;
    static MINUTES: TimeUnit;
    static NANOSECONDS: TimeUnit;
    static SECONDS: TimeUnit;
    static of(paramarg0: ChronoUnit): TimeUnit;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TimeUnit;
    static values(): TimeUnit[];
    private constructor(arg2: number)
    // private maxMicros: number;
    // private maxMillis: number;
    // private maxNanos: number;
    // private maxSecs: number;
    // private microRatio: number;
    // private milliRatio: number;
    // private scale: number;
    // private secRatio: number;
    convert(arg0: Duration): number;
    convert(arg0: number, arg1: TimeUnit): number;
    // private excessNanos(arg0: number, arg1: number): number;
    sleep(arg0: number): void;
    timedJoin(arg0: Thread, arg1: number): void;
    timedWait(arg0: Object, arg1: number): void;
    toChronoUnit(): ChronoUnit;
    toDays(arg0: number): number;
    toHours(arg0: number): number;
    toMicros(arg0: number): number;
    toMillis(arg0: number): number;
    toMinutes(arg0: number): number;
    toNanos(arg0: number): number;
    toSeconds(arg0: number): number;
    name(): "NANOSECONDS" | "MICROSECONDS" | "MILLISECONDS" | "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
}