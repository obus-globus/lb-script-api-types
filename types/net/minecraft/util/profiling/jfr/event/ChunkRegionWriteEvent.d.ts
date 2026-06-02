import type { EventType } from '../../../../../../jdk/jfr/EventType.d.ts'
import type { ChunkRegionIoEvent } from '../../../../../../net/minecraft/util/profiling/jfr/event/ChunkRegionIoEvent.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { RegionFileVersion } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionFileVersion.d.ts'
import type { RegionStorageInfo } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
export class ChunkRegionWriteEvent extends ChunkRegionIoEvent {
    static EVENT_NAME: string;
    static TYPE: EventType;
    constructor(info: RegionStorageInfo, chunkPos: ChunkPos, version: RegionFileVersion, bytes: number)
}