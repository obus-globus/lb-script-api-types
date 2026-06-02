import type { ZoneId } from '../../../../../../../java/time/ZoneId.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { TimeZone } from '../../../../../../../java/util/TimeZone.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
export class TimeZoneAdapter extends TimeZone {
    static LONG: number;
    static SHORT: number;
    static availableIDs(): Stream<string>;
    static availableIDs(paramarg0: number): Stream<string>;
    static getAvailableIDs(): (Object | null)[];
    static getAvailableIDs(paramarg0: number): (Object | null)[];
    static getDefault(): TimeZone;
    static getTimeZone(paramarg0: string): TimeZone;
    static getTimeZone(paramarg0: ZoneId): TimeZone;
    static setDefault(paramarg0: TimeZone): void;
    static wrap(paramtz: TimeZone): TimeZone;
    constructor(zone: TimeZone)
    // private zone: TimeZone;
    clone(): Object;
    equals(obj: Object | null): boolean;
    getOffset(era: number, year: number, month: number, day: number, dayOfWeek: number, millis: number): number;
    getRawOffset(): number;
    hasSameRules(other: TimeZone): boolean;
    hashCode(): number;
    inDaylightTime(date: Date): boolean;
    setID(ID: string): void;
    setRawOffset(offsetMillis: number): void;
    toString(): string;
    unwrap(): TimeZone;
    useDaylightTime(): boolean;
}