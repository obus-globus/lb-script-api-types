import type { DataOutput } from '../../../java/io/DataOutput.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { Clock } from '../../../java/time/Clock.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { ZoneId } from '../../../java/time/ZoneId.d.ts'
import type { ZoneOffset } from '../../../java/time/ZoneOffset.d.ts'
import type { ChronoLocalDate } from '../../../java/time/chrono/ChronoLocalDate.d.ts'
import type { ChronoLocalDateTime } from '../../../java/time/chrono/ChronoLocalDateTime.d.ts'
import type { ChronoPeriod } from '../../../java/time/chrono/ChronoPeriod.d.ts'
import type { ChronoZonedDateTime } from '../../../java/time/chrono/ChronoZonedDateTime.d.ts'
import type { Chronology } from '../../../java/time/chrono/Chronology.d.ts'
import type { Era } from '../../../java/time/chrono/Era.d.ts'
import type { ResolverStyle } from '../../../java/time/format/ResolverStyle.d.ts'
import type { TextStyle } from '../../../java/time/format/TextStyle.d.ts'
import type { ChronoField } from '../../../java/time/temporal/ChronoField.d.ts'
import type { TemporalAccessor } from '../../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalField } from '../../../java/time/temporal/TemporalField.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractChronology extends Object implements Chronology {
    static from(paramarg0: TemporalAccessor): Chronology;
    static getAvailableChronologies(): Chronology[];
    static of(paramarg0: string): Chronology;
    static ofLocale(paramarg0: Locale): Chronology;
    constructor()
    addFieldValue(arg0: Map<TemporalField, number>, arg1: ChronoField, arg2: number): void;
    compareTo(arg0: Chronology): number;
    date(arg0: Era, arg1: number, arg2: number, arg3: number): ChronoLocalDate;
    dateNow(): ChronoLocalDate;
    dateNow(arg0: Clock): ChronoLocalDate;
    dateNow(arg0: ZoneId): ChronoLocalDate;
    dateYearDay(arg0: Era, arg1: number, arg2: number): ChronoLocalDate;
    epochSecond(arg0: Era, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: ZoneOffset): number;
    epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: ZoneOffset): number;
    equals(arg0: Object | null): boolean;
    getDisplayName(arg0: TextStyle, arg1: Locale): string;
    hashCode(): number;
    isIsoBased(): boolean;
    localDateTime(arg0: TemporalAccessor): ChronoLocalDateTime<ChronoLocalDate>;
    period(arg0: number, arg1: number, arg2: number): ChronoPeriod;
    // private readObject(arg0: ObjectInputStream): void;
    resolveAligned(arg0: ChronoLocalDate, arg1: number, arg2: number, arg3: number): ChronoLocalDate;
    resolveDate(arg0: Map<TemporalField, number>, arg1: ResolverStyle): ChronoLocalDate;
    resolveProlepticMonth(arg0: Map<TemporalField, number>, arg1: ResolverStyle): void;
    resolveYAA(arg0: Map<TemporalField, number>, arg1: ResolverStyle): ChronoLocalDate;
    resolveYAD(arg0: Map<TemporalField, number>, arg1: ResolverStyle): ChronoLocalDate;
    resolveYD(arg0: Map<TemporalField, number>, arg1: ResolverStyle): ChronoLocalDate;
    resolveYMAA(arg0: Map<TemporalField, number>, arg1: ResolverStyle): ChronoLocalDate;
    resolveYMAD(arg0: Map<TemporalField, number>, arg1: ResolverStyle): ChronoLocalDate;
    resolveYMD(arg0: Map<TemporalField, number>, arg1: ResolverStyle): ChronoLocalDate;
    resolveYearOfEra(arg0: Map<TemporalField, number>, arg1: ResolverStyle): ChronoLocalDate;
    toString(): string;
    writeExternal(arg0: DataOutput): void;
    writeReplace(): Object;
    zonedDateTime(arg0: Instant, arg1: ZoneId): ChronoZonedDateTime<ChronoLocalDate>;
    zonedDateTime(arg0: TemporalAccessor): ChronoZonedDateTime<ChronoLocalDate>;
}