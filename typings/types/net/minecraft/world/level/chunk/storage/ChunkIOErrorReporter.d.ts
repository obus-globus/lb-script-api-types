import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { RegionStorageInfo } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
export interface ChunkIOErrorReporter extends Object{
    reportChunkLoadFailure(throwable: Throwable, storageInfo: RegionStorageInfo, pos: ChunkPos): void;
    reportChunkSaveFailure(throwable: Throwable, storageInfo: RegionStorageInfo, pos: ChunkPos): void;
    reportMisplacedChunk(storedPos: ChunkPos, requestedPos: ChunkPos, storageInfo: RegionStorageInfo): void;
}