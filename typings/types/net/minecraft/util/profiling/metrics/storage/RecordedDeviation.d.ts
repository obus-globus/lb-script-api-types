import type { Instant } from '../../../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProfileResults } from '../../../../../../net/minecraft/util/profiling/ProfileResults.d.ts'
export class RecordedDeviation extends Object {
    constructor(timestamp: Instant, tick: number, profilerResultAtTick: ProfileResults)
    profilerResultAtTick: ProfileResults;
    tick: number;
    timestamp: Instant;
}