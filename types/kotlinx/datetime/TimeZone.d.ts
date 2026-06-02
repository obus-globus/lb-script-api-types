import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { TimeZone$Companion } from '../../kotlinx/datetime/TimeZone$Companion.d.ts'
export class TimeZone extends Object {
    static Companion: TimeZone$Companion;
    constructor(zoneId: ZoneId)
    readonly id: string;
    // private zoneId: ZoneId;
    /*not mapped: */ getZoneId$kotlinx_datetime(): ZoneId;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}