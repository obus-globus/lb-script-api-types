import type { ZoneOffset } from '../../../../java/time/ZoneOffset.d.ts'
import type { ChunkHeader } from '../../../../jdk/jfr/internal/consumer/ChunkHeader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TimeConverter extends Object {
    constructor(arg0: ChunkHeader, arg1: number)
    // private divisor: number;
    // private startNanos: number;
    // private startTicks: number;
    readonly zoneOffset: ZoneOffset;
    convertTimespan(arg0: number): number;
    convertTimestamp(arg0: number): number;
    getZoneOffset(): ZoneOffset;
    // private zoneOfSet(arg0: number): ZoneOffset;
}