import type { ZoneId } from '../../../../../java/time/ZoneId.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GmtTimeZone extends TimeZone {
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
    constructor(arg0: boolean, arg1: number, arg2: number)
    // private offset: number;
    // private zoneId: string;
    equals(arg0: Object | null): boolean;
    getID(): string;
    getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    getOffset(arg0: number): number;
    getRawOffset(): number;
    hashCode(): number;
    inDaylightTime(arg0: Date): boolean;
    setRawOffset(arg0: number): void;
    toString(): string;
    useDaylightTime(): boolean;
}