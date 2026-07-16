import type { Class } from '../../../java/lang/Class.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Temporal } from '../../../java/time/temporal/Temporal.d.ts'
import type { TemporalUnit } from '../../../java/time/temporal/TemporalUnit.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ChronoUnit extends Enum<ChronoUnit> implements TemporalUnit {
    static CENTURIES: ChronoUnit;
    static DAYS: ChronoUnit;
    static DECADES: ChronoUnit;
    static ERAS: ChronoUnit;
    static FOREVER: ChronoUnit;
    static HALF_DAYS: ChronoUnit;
    static HOURS: ChronoUnit;
    static MICROS: ChronoUnit;
    static MILLENNIA: ChronoUnit;
    static MILLIS: ChronoUnit;
    static MINUTES: ChronoUnit;
    static MONTHS: ChronoUnit;
    static NANOS: ChronoUnit;
    static SECONDS: ChronoUnit;
    static WEEKS: ChronoUnit;
    static YEARS: ChronoUnit;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ChronoUnit;
    static values(): ChronoUnit[];
    private constructor(arg2: string, arg3: Duration)
    readonly duration: Duration;
    // private name: string;
    addTo<R extends Temporal>(arg0: R, arg1: number): R;
    between(arg0: Temporal, arg1: Temporal): number;
    getDuration(): Duration;
    isDateBased(): boolean;
    isDurationEstimated(): boolean;
    isSupportedBy(arg0: Temporal): boolean;
    isTimeBased(): boolean;
    toString(): string;
    name(): "NANOS" | "MICROS" | "MILLIS" | "SECONDS" | "MINUTES" | "HOURS" | "HALF_DAYS" | "DAYS" | "WEEKS" | "MONTHS" | "YEARS" | "DECADES" | "CENTURIES" | "MILLENNIA" | "ERAS" | "FOREVER";
}