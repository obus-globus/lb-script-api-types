import type { DataOutput } from '../../java/io/DataOutput.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { Temporal } from '../../java/time/temporal/Temporal.d.ts'
import type { TemporalAccessor } from '../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalAdjuster } from '../../java/time/temporal/TemporalAdjuster.d.ts'
import type { TemporalField } from '../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../java/time/temporal/TemporalQuery.d.ts'
import type { ValueRange } from '../../java/time/temporal/ValueRange.d.ts'
import type { ZoneRules } from '../../java/time/zone/ZoneRules.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class ZoneOffset extends ZoneId implements Serializable, TemporalAccessor, TemporalAdjuster, Comparable<ZoneOffset> {
    static MAX: ZoneOffset;
    static MIN: ZoneOffset;
    static SHORT_IDS: { [key: string]: string };
    static UTC: ZoneOffset;
    static from(paramarg0: TemporalAccessor): ZoneId;
    static from(paramarg0: TemporalAccessor): ZoneOffset;
    static getAvailableZoneIds(): string[];
    static of(paramarg0: string): ZoneId;
    static of(paramarg0: string, paramarg1: { [key: string]: string }): ZoneId;
    static of(paramarg0: string): ZoneOffset;
    static ofHours(paramarg0: number): ZoneOffset;
    static ofHoursMinutes(paramarg0: number, paramarg1: number): ZoneOffset;
    static ofHoursMinutesSeconds(paramarg0: number, paramarg1: number, paramarg2: number): ZoneOffset;
    static ofOffset(paramarg0: string, paramarg1: ZoneOffset): ZoneId;
    static ofTotalSeconds(paramarg0: number): ZoneOffset;
    static systemDefault(): ZoneId;
    private constructor(arg0: number)
    readonly id: string;
    readonly rules: ZoneRules;
    readonly totalSeconds: number;
    adjustInto(arg0: Temporal): Temporal;
    compareTo(arg0: ZoneOffset): number;
    equals(arg0: Object | null): boolean;
    get(arg0: TemporalField): number;
    getId(): string;
    getLong(arg0: TemporalField): number;
    getOffset(arg0: number): ZoneOffset;
    getRules(): ZoneRules;
    getTotalSeconds(): number;
    hashCode(): number;
    isSupported(arg0: TemporalField): boolean;
    normalized(): ZoneId;
    query<R extends Object | number | string | boolean>(arg0: (param0: R) => unknown): R;
    range(arg0: TemporalField): ValueRange;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
    write(arg0: DataOutput): void;
    writeExternal(arg0: DataOutput): void;
    // private writeReplace(): Object;
}