import type { DataFixer } from '../../../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { DataFixTypes } from '../../../../../../net/minecraft/util/datafix/DataFixTypes.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { IOWorker } from '../../../../../../net/minecraft/world/level/chunk/storage/IOWorker.d.ts'
import type { RegionStorageInfo } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
import type { SimpleRegionStorage } from '../../../../../../net/minecraft/world/level/chunk/storage/SimpleRegionStorage.d.ts'
export class RecreatingSimpleRegionStorage extends SimpleRegionStorage {
    static injectDatafixingContext(paramchunkTag: CompoundTag, paramcontextTag: CompoundTag): void;
    constructor(readInfo: RegionStorageInfo, readFolder: Path[], writeInfo: RegionStorageInfo, writeFolder: Path[], fixerUpper: DataFixer, syncWrites: boolean, dataFixType: DataFixTypes)
    // private writeFolder: Path[];
    // private writeWorker: IOWorker;
    close(): void;
    write(pos: ChunkPos, supplier: () => CompoundTag): CompletableFuture<void>;
}