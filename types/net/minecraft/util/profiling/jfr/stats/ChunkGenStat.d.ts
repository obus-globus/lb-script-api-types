import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Duration } from '../../../../../../java/time/Duration.d.ts'
import type { RecordedEvent } from '../../../../../../jdk/jfr/consumer/RecordedEvent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ColumnPos } from '../../../../../../net/minecraft/server/level/ColumnPos.d.ts'
import type { TimedStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/TimedStat.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ChunkStatus } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
export class ChunkGenStat extends Record implements TimedStat {
    static from(paramevent: RecordedEvent): ChunkGenStat;
    constructor(duration: Duration, chunkPos: ChunkPos, worldPos: ColumnPos, status: ChunkStatus, level: string)
    // private chunkPos: ChunkPos;
    // private duration: Duration;
    // private level: string;
    // private status: ChunkStatus;
    // private worldPos: ColumnPos;
    chunkPos(): ChunkPos;
    duration(): Duration;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): string;
    status(): ChunkStatus;
    toString(): string;
    worldPos(): ColumnPos;
}