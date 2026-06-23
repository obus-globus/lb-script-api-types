import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { DataFixTypes } from '../../../../../net/minecraft/util/datafix/DataFixTypes.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { RegionStorageInfo } from '../../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
import type { SimpleRegionStorage } from '../../../../../net/minecraft/world/level/chunk/storage/SimpleRegionStorage.d.ts'
export class ChunkNbt extends Object implements AutoCloseable {
    constructor(info: RegionStorageInfo, path: Path[], type: DataFixTypes, targetVersion: number)
    // private storage: SimpleRegionStorage;
    // private targetVersion: number;
    close(): void;
    updateChunk(pos: ChunkPos, dataFixContext: CompoundTag, fixer: (param0: CompoundTag) => Object | null): void;
}