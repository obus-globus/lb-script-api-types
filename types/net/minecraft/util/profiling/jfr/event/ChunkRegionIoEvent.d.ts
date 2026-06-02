import type { Event } from '../../../../../../jdk/jfr/Event.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { RegionFileVersion } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionFileVersion.d.ts'
import type { RegionStorageInfo } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
export abstract class ChunkRegionIoEvent extends Event {
    constructor(info: RegionStorageInfo, chunkPos: ChunkPos, version: RegionFileVersion, bytes: number)
    bytes: number;
    chunkPosX: number;
    chunkPosZ: number;
    compression: string;
    dimension: string;
    levelId: string;
    localChunkPosX: number;
    localChunkPosZ: number;
    regionPosX: number;
    regionPosZ: number;
    type: string;
}