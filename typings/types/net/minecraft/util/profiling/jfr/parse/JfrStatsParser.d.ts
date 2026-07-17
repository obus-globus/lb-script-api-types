import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Duration } from '../../../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../../../java/time/Instant.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { RecordedEvent } from '../../../../../../jdk/jfr/consumer/RecordedEvent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JfrStatsParser$MutableCountAndSize } from '../../../../../../net/minecraft/util/profiling/jfr/parse/JfrStatsParser$MutableCountAndSize.d.ts'
import type { JfrStatsResult } from '../../../../../../net/minecraft/util/profiling/jfr/parse/JfrStatsResult.d.ts'
import type { ChunkGenStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/ChunkGenStat.d.ts'
import type { ChunkIdentification } from '../../../../../../net/minecraft/util/profiling/jfr/stats/ChunkIdentification.d.ts'
import type { CpuLoadStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/CpuLoadStat.d.ts'
import type { FileIOStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/FileIOStat.d.ts'
import type { FpsStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/FpsStat.d.ts'
import type { GcHeapStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/GcHeapStat.d.ts'
import type { PacketIdentification } from '../../../../../../net/minecraft/util/profiling/jfr/stats/PacketIdentification.d.ts'
import type { StructureGenStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/StructureGenStat.d.ts'
import type { ThreadAllocationStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/ThreadAllocationStat.d.ts'
import type { TickTimeStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/TickTimeStat.d.ts'
export class JfrStatsParser extends Object {
    static parse(parampath: Path): JfrStatsResult;
    private constructor(events: Stream<RecordedEvent>)
    // private chunkGenStats: ChunkGenStat[];
    // private cpuLoadStat: CpuLoadStat[];
    // private fileReads: FileIOStat[];
    // private fileWrites: FileIOStat[];
    // private fps: FpsStat[];
    // private garbageCollections: number;
    // private gcHeapStats: GcHeapStat[];
    // private gcTotalDuration: Duration;
    // private readChunks: JavaMap<ChunkIdentification, JfrStatsParser$MutableCountAndSize>;
    // private receivedPackets: JavaMap<PacketIdentification, JfrStatsParser$MutableCountAndSize>;
    // private recordingEnded: Instant;
    // private recordingStarted: Instant;
    // private sentPackets: JavaMap<PacketIdentification, JfrStatsParser$MutableCountAndSize>;
    // private serverTickTimes: TickTimeStat[];
    // private structureGenStats: StructureGenStat[];
    // private threadAllocationStats: ThreadAllocationStat[];
    // private worldCreationDuration: Duration;
    // private writtenChunks: JavaMap<ChunkIdentification, JfrStatsParser$MutableCountAndSize>;
    // private appendFileIO(event: RecordedEvent, stats: FileIOStat[], sizeField: string): void;
    // private capture(events: Stream<RecordedEvent>): void;
    // private incrementChunk(event: RecordedEvent, chunkSize: number, packets: JavaMap<ChunkIdentification, JfrStatsParser$MutableCountAndSize>): void;
    // private incrementPacket(event: RecordedEvent, packetSize: number, packets: JavaMap<PacketIdentification, JfrStatsParser$MutableCountAndSize>): void;
    // private results(): JfrStatsResult;
}