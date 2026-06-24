import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { TimeZone as TimeZone_2 } from '../../../../java/util/TimeZone.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class TimeZoneAdapter extends TimeZone_2 implements Cloneable {
    static LONG: number;
    static SHORT: number;
    static availableIDs(): Stream<string>;
    static availableIDs(paramarg0: number): Stream<string>;
    static getAvailableIDs(): (Object | null)[];
    static getAvailableIDs(paramarg0: number): (Object | null)[];
    static getDefault(): TimeZone_2;
    static getTimeZone(paramarg0: string): TimeZone_2;
    static getTimeZone(paramarg0: ZoneId): TimeZone_2;
    static setDefault(paramarg0: TimeZone_2): void;
    static wrap(paramarg0: TimeZone): TimeZone_2;
    constructor(arg0: TimeZone)
    // private zone: TimeZone;
    clone(): TimeZoneAdapter;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    getOffset(arg0: number): number;
    getRawOffset(): number;
    hasSameRules(arg0: TimeZone_2): boolean;
    hashCode(): number;
    inDaylightTime(arg0: Date): boolean;
    setID(arg0: string): void;
    setRawOffset(arg0: number): void;
    toString(): string;
    unwrap(): TimeZone;
    useDaylightTime(): boolean;
}