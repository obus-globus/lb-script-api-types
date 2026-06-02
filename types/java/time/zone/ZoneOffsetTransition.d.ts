import type { DataOutput } from '../../../java/io/DataOutput.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { LocalDateTime } from '../../../java/time/LocalDateTime.d.ts'
import type { ZoneOffset } from '../../../java/time/ZoneOffset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class ZoneOffsetTransition extends Object implements Serializable, Comparable<ZoneOffsetTransition> {
    static of(paramarg0: LocalDateTime, paramarg1: ZoneOffset, paramarg2: ZoneOffset): ZoneOffsetTransition;
    constructor(arg0: LocalDateTime, arg1: ZoneOffset, arg2: ZoneOffset)
    constructor(arg0: number, arg1: ZoneOffset, arg2: ZoneOffset)
    // private epochSecond: number;
    readonly offsetAfter: ZoneOffset;
    readonly offsetBefore: ZoneOffset;
    // private transition: LocalDateTime;
    compareTo(arg0: ZoneOffsetTransition): number;
    equals(arg0: Object | null): boolean;
    getDateTimeAfter(): LocalDateTime;
    getDateTimeBefore(): LocalDateTime;
    getDuration(): Duration;
    // private getDurationSeconds(): number;
    getInstant(): Instant;
    getOffsetAfter(): ZoneOffset;
    getOffsetBefore(): ZoneOffset;
    getValidOffsets(): ZoneOffset[];
    hashCode(): number;
    isGap(): boolean;
    isOverlap(): boolean;
    isValidOffset(arg0: ZoneOffset): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    toEpochSecond(): number;
    toString(): string;
    writeExternal(arg0: DataOutput): void;
    // private writeReplace(): Object;
}