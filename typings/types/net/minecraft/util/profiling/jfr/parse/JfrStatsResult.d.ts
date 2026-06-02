import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Duration } from '../../../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChunkGenStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/ChunkGenStat.d.ts'
import type { ChunkIdentification } from '../../../../../../net/minecraft/util/profiling/jfr/stats/ChunkIdentification.d.ts'
import type { CpuLoadStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/CpuLoadStat.d.ts'
import type { FileIOStat$Summary } from '../../../../../../net/minecraft/util/profiling/jfr/stats/FileIOStat$Summary.d.ts'
import type { FpsStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/FpsStat.d.ts'
import type { GcHeapStat$Summary } from '../../../../../../net/minecraft/util/profiling/jfr/stats/GcHeapStat$Summary.d.ts'
import type { IoSummary } from '../../../../../../net/minecraft/util/profiling/jfr/stats/IoSummary.d.ts'
import type { PacketIdentification } from '../../../../../../net/minecraft/util/profiling/jfr/stats/PacketIdentification.d.ts'
import type { StructureGenStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/StructureGenStat.d.ts'
import type { ThreadAllocationStat$Summary } from '../../../../../../net/minecraft/util/profiling/jfr/stats/ThreadAllocationStat$Summary.d.ts'
import type { TickTimeStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/TickTimeStat.d.ts'
import type { TimedStatSummary } from '../../../../../../net/minecraft/util/profiling/jfr/stats/TimedStatSummary.d.ts'
import type { ChunkStatus } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
export class JfrStatsResult extends Record {
    constructor(recordingStarted: Instant, recordingEnded: Instant, recordingDuration: Duration, worldCreationDuration: Duration, fps: FpsStat[], serverTickTimes: TickTimeStat[], cpuLoadStats: CpuLoadStat[], heapSummary: GcHeapStat$Summary, threadAllocationSummary: ThreadAllocationStat$Summary, receivedPacketsSummary: IoSummary<PacketIdentification>, sentPacketsSummary: IoSummary<PacketIdentification>, writtenChunks: IoSummary<ChunkIdentification>, readChunks: IoSummary<ChunkIdentification>, fileWrites: FileIOStat$Summary, fileReads: FileIOStat$Summary, chunkGenStats: ChunkGenStat[], structureGenStats: StructureGenStat[])
    // private chunkGenStats: ChunkGenStat[];
    // private cpuLoadStats: CpuLoadStat[];
    // private fileReads: FileIOStat$Summary;
    // private fileWrites: FileIOStat$Summary;
    // private fps: FpsStat[];
    // private heapSummary: GcHeapStat$Summary;
    // private readChunks: IoSummary<ChunkIdentification>;
    // private receivedPacketsSummary: IoSummary<PacketIdentification>;
    // private recordingDuration: Duration;
    // private recordingEnded: Instant;
    // private recordingStarted: Instant;
    // private sentPacketsSummary: IoSummary<PacketIdentification>;
    // private serverTickTimes: TickTimeStat[];
    // private structureGenStats: StructureGenStat[];
    // private threadAllocationSummary: ThreadAllocationStat$Summary;
    // private worldCreationDuration: Duration;
    // private writtenChunks: IoSummary<ChunkIdentification>;
    asJson(): string;
    chunkGenStats(): ChunkGenStat[];
    chunkGenSummary(): Pair<ChunkStatus, TimedStatSummary<ChunkGenStat>>[];
    cpuLoadStats(): CpuLoadStat[];
    equals(o: Object | null): boolean;
    fileReads(): FileIOStat$Summary;
    fileWrites(): FileIOStat$Summary;
    fps(): FpsStat[];
    hashCode(): number;
    heapSummary(): GcHeapStat$Summary;
    readChunks(): IoSummary<ChunkIdentification>;
    receivedPacketsSummary(): IoSummary<PacketIdentification>;
    recordingDuration(): Duration;
    recordingEnded(): Instant;
    recordingStarted(): Instant;
    sentPacketsSummary(): IoSummary<PacketIdentification>;
    serverTickTimes(): TickTimeStat[];
    structureGenStats(): StructureGenStat[];
    threadAllocationSummary(): ThreadAllocationStat$Summary;
    toString(): string;
    worldCreationDuration(): Duration;
    writtenChunks(): IoSummary<ChunkIdentification>;
}