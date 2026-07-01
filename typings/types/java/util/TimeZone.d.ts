import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export abstract class TimeZone extends Object implements Serializable, Cloneable {
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
    constructor()
    readonly ID: string;
    // private zoneId: ZoneId;
    clone(): Object;
    getDSTSavings(): number;
    getDisplayName(): string;
    getDisplayName(arg0: Locale): string;
    getDisplayName(arg0: boolean, arg1: number): string;
    getDisplayName(arg0: boolean, arg1: number, arg2: Locale): string;
    getID(): string;
    getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    getOffset(arg0: number): number;
    getOffsets(arg0: number, arg1: number[]): number;
    getRawOffset(): number;
    hasSameRules(arg0: TimeZone): boolean;
    inDaylightTime(arg0: Date): boolean;
    observesDaylightTime(): boolean;
    setID(arg0: string): void;
    setRawOffset(arg0: number): void;
    toZoneId(): ZoneId;
    // private toZoneId0(): ZoneId;
    useDaylightTime(): boolean;
}