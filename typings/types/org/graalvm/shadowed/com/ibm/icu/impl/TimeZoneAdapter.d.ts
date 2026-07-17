import type { ZoneId } from '../../../../../../../java/time/ZoneId.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { TimeZone } from '../../../../../../../java/util/TimeZone.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { TimeZone as TimeZone_2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
export class TimeZoneAdapter extends TimeZone implements Cloneable {
    static LONG: number;
    static SHORT: number;
    static availableIDs(): Stream<string>;
    static availableIDs(paramarg0: number): Stream<string>;
    static getAvailableIDs(): string[];
    static getAvailableIDs(paramarg0: number): string[];
    static getDefault(): TimeZone;
    static getTimeZone(paramarg0: string): TimeZone;
    static getTimeZone(paramarg0: ZoneId): TimeZone;
    static setDefault(paramarg0: TimeZone): void;
    static wrap(paramtz: TimeZone_2): TimeZone;
    constructor(zone: TimeZone_2)
    // private zone: TimeZone_2;
    clone(): TimeZoneAdapter;
    equals(obj: Object | null): boolean;
    getOffset(era: number, year: number, month: number, day: number, dayOfWeek: number, millis: number): number;
    getOffset(arg0: number): number;
    getRawOffset(): number;
    hasSameRules(other: TimeZone): boolean;
    hashCode(): number;
    inDaylightTime(date: Date): boolean;
    setID(ID: string): void;
    setRawOffset(offsetMillis: number): void;
    toString(): string;
    unwrap(): TimeZone_2;
    useDaylightTime(): boolean;
}