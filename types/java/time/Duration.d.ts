import type { DataOutput } from '../../java/io/DataOutput.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { BigDecimal } from '../../java/math/BigDecimal.d.ts'
import type { Temporal } from '../../java/time/temporal/Temporal.d.ts'
import type { TemporalAmount } from '../../java/time/temporal/TemporalAmount.d.ts'
import type { TemporalUnit } from '../../java/time/temporal/TemporalUnit.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class Duration extends Object implements Serializable, TemporalAmount, Comparable<Duration> {
    static ZERO: Duration;
    static between(paramarg0: Temporal, paramarg1: Temporal): Duration;
    static from(paramarg0: TemporalAmount): Duration;
    static of(paramarg0: number, paramarg1: TemporalUnit): Duration;
    static ofDays(paramarg0: number): Duration;
    static ofHours(paramarg0: number): Duration;
    static ofMillis(paramarg0: number): Duration;
    static ofMinutes(paramarg0: number): Duration;
    static ofNanos(paramarg0: number): Duration;
    static ofSeconds(paramarg0: number): Duration;
    static ofSeconds(paramarg0: number, paramarg1: number): Duration;
    static parse(paramarg0: CharSequence): Duration;
    private constructor(arg0: number, arg1: number)
    // private nanos: number;
    readonly seconds: number;
    abs(): Duration;
    addTo(arg0: Temporal): Temporal;
    compareTo(arg0: Duration): number;
    dividedBy(arg0: Duration): number;
    dividedBy(arg0: number): Duration;
    equals(arg0: Object | null): boolean;
    get(arg0: TemporalUnit): number;
    getNano(): number;
    getSeconds(): number;
    getUnits(): TemporalUnit[];
    hashCode(): number;
    isNegative(): boolean;
    isPositive(): boolean;
    isZero(): boolean;
    minus(arg0: Duration): Duration;
    minus(arg0: number, arg1: TemporalUnit): Duration;
    minusDays(arg0: number): Duration;
    minusHours(arg0: number): Duration;
    minusMillis(arg0: number): Duration;
    minusMinutes(arg0: number): Duration;
    minusNanos(arg0: number): Duration;
    minusSeconds(arg0: number): Duration;
    multipliedBy(arg0: number): Duration;
    negated(): Duration;
    plus(arg0: Duration): Duration;
    plus(arg0: number, arg1: TemporalUnit): Duration;
    // private plus(arg0: number, arg1: number): Duration;
    plusDays(arg0: number): Duration;
    plusHours(arg0: number): Duration;
    plusMillis(arg0: number): Duration;
    plusMinutes(arg0: number): Duration;
    plusNanos(arg0: number): Duration;
    plusSeconds(arg0: number): Duration;
    // private readObject(arg0: ObjectInputStream): void;
    subtractFrom(arg0: Temporal): Temporal;
    // private toBigDecimalSeconds(): BigDecimal;
    toDays(): number;
    toDaysPart(): number;
    toHours(): number;
    toHoursPart(): number;
    toMillis(): number;
    toMillisPart(): number;
    toMinutes(): number;
    toMinutesPart(): number;
    toNanos(): number;
    toNanosPart(): number;
    toSeconds(): number;
    toSecondsPart(): number;
    toString(): string;
    truncatedTo(arg0: TemporalUnit): Duration;
    withNanos(arg0: number): Duration;
    withSeconds(arg0: number): Duration;
    writeExternal(arg0: DataOutput): void;
    // private writeReplace(): Object;
}