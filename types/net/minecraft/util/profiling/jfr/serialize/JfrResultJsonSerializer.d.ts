import type { Gson } from '../../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JfrStatsResult } from '../../../../../../net/minecraft/util/profiling/jfr/parse/JfrStatsResult.d.ts'
import type { ChunkGenStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/ChunkGenStat.d.ts'
import type { CpuLoadStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/CpuLoadStat.d.ts'
import type { FileIOStat$Summary } from '../../../../../../net/minecraft/util/profiling/jfr/stats/FileIOStat$Summary.d.ts'
import type { FpsStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/FpsStat.d.ts'
import type { GcHeapStat$Summary } from '../../../../../../net/minecraft/util/profiling/jfr/stats/GcHeapStat$Summary.d.ts'
import type { IoSummary } from '../../../../../../net/minecraft/util/profiling/jfr/stats/IoSummary.d.ts'
import type { StructureGenStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/StructureGenStat.d.ts'
import type { ThreadAllocationStat$Summary } from '../../../../../../net/minecraft/util/profiling/jfr/stats/ThreadAllocationStat$Summary.d.ts'
import type { TickTimeStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/TickTimeStat.d.ts'
import type { TimedStatSummary } from '../../../../../../net/minecraft/util/profiling/jfr/stats/TimedStatSummary.d.ts'
import type { ChunkStatus } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
export class JfrResultJsonSerializer extends Object {
    constructor()
    // private gson: Gson;
    // private chunkGen(chunkGenSummary: Pair<ChunkStatus, TimedStatSummary<ChunkGenStat>>[]): JsonElement;
    // private cpu(cpuStats: CpuLoadStat[]): JsonElement;
    // private fileIO(jfrStats: JfrStatsResult): JsonElement;
    // private fileIoSummary(io: FileIOStat$Summary): JsonElement;
    format(jfrStats: JfrStatsResult): string;
    // private fps(fpsStats: FpsStat[]): JsonElement;
    // private heap(heapSummary: GcHeapStat$Summary): JsonElement;
    // private ioSummary(summary: IoSummary<T>, elementWriter: (param0: T, param1: JsonObject) => void): JsonElement;
    // private network(jfrStats: JfrStatsResult): JsonElement;
    // private serverTicks(tickTimeStats: TickTimeStat[]): JsonElement;
    // private structureGen(structureGenStats: StructureGenStat[]): JsonElement;
    // private threadAllocations(threadAllocationSummary: ThreadAllocationStat$Summary): JsonElement;
}