import type { DataOutput } from '../../java/io/DataOutput.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { LocalDate } from '../../java/time/LocalDate.d.ts'
import type { ChronoLocalDate } from '../../java/time/chrono/ChronoLocalDate.d.ts'
import type { ChronoPeriod } from '../../java/time/chrono/ChronoPeriod.d.ts'
import type { IsoChronology } from '../../java/time/chrono/IsoChronology.d.ts'
import type { Temporal } from '../../java/time/temporal/Temporal.d.ts'
import type { TemporalAccessor } from '../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalAmount } from '../../java/time/temporal/TemporalAmount.d.ts'
import type { TemporalUnit } from '../../java/time/temporal/TemporalUnit.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export class Period extends Object implements Serializable, ChronoPeriod {
    static ZERO: Period;
    static between(paramarg0: LocalDate, paramarg1: LocalDate): Period;
    static between(paramarg0: ChronoLocalDate, paramarg1: ChronoLocalDate): ChronoPeriod;
    static from(paramarg0: TemporalAmount): Period;
    static of(paramarg0: number, paramarg1: number, paramarg2: number): Period;
    static ofDays(paramarg0: number): Period;
    static ofMonths(paramarg0: number): Period;
    static ofWeeks(paramarg0: number): Period;
    static ofYears(paramarg0: number): Period;
    static parse(paramarg0: CharSequence): Period;
    private constructor(arg0: number, arg1: number, arg2: number)
    readonly days: number;
    readonly months: number;
    readonly years: number;
    addTo(arg0: Temporal): Temporal;
    equals(arg0: Object | null): boolean;
    get(arg0: TemporalUnit): number;
    getChronology(): IsoChronology;
    getDays(): number;
    getMonths(): number;
    getUnits(): TemporalUnit[];
    getYears(): number;
    hashCode(): number;
    isNegative(): boolean;
    isZero(): boolean;
    minus(arg0: TemporalAmount): Period;
    minusDays(arg0: number): Period;
    minusMonths(arg0: number): Period;
    minusYears(arg0: number): Period;
    multipliedBy(arg0: number): Period;
    negated(): Period;
    negated(): ChronoPeriod;
    normalized(): Period;
    plus(arg0: TemporalAmount): Period;
    plusDays(arg0: number): Period;
    plusMonths(arg0: number): Period;
    plusYears(arg0: number): Period;
    // private readObject(arg0: ObjectInputStream): void;
    subtractFrom(arg0: Temporal): Temporal;
    toString(): string;
    toTotalMonths(): number;
    // private validateChrono(arg0: TemporalAccessor): void;
    withDays(arg0: number): Period;
    withMonths(arg0: number): Period;
    withYears(arg0: number): Period;
    writeExternal(arg0: DataOutput): void;
    // private writeReplace(): Object;
}