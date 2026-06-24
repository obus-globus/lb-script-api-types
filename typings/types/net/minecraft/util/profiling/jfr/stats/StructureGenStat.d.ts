import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Duration } from '../../../../../../java/time/Duration.d.ts'
import type { RecordedEvent } from '../../../../../../jdk/jfr/consumer/RecordedEvent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TimedStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/TimedStat.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class StructureGenStat extends Record implements TimedStat {
    static from(paramevent: RecordedEvent): StructureGenStat;
    constructor(duration: Duration, chunkPos: ChunkPos, structureName: string, level: string, success: boolean)
    // private chunkPos: ChunkPos;
    // private duration: Duration;
    // private level: string;
    // private structureName: string;
    // private success: boolean;
    chunkPos(): ChunkPos;
    duration(): Duration;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): string;
    structureName(): string;
    success(): boolean;
    toString(): string;
}