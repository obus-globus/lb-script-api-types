import type { DataFixer } from '../../../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { Dynamic } from '../../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Tag } from '../../../../../../net/minecraft/nbt/Tag.d.ts'
import type { DataFixTypes } from '../../../../../../net/minecraft/util/datafix/DataFixTypes.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ChunkScanAccess } from '../../../../../../net/minecraft/world/level/chunk/storage/ChunkScanAccess.d.ts'
import type { IOWorker } from '../../../../../../net/minecraft/world/level/chunk/storage/IOWorker.d.ts'
import type { RegionStorageInfo } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
export class SimpleRegionStorage extends Object implements AutoCloseable {
    static injectDatafixingContext(paramchunkTag: CompoundTag, paramcontextTag: CompoundTag): void;
    constructor(info: RegionStorageInfo, folder: Path, fixerUpper: DataFixer, syncWrites: boolean, dataFixType: DataFixTypes)
    // private dataFixType: DataFixTypes;
    // private fixerUpper: DataFixer;
    // private worker: IOWorker;
    chunkScanner(): ChunkScanAccess;
    close(): void;
    isOldChunkAround(pos: ChunkPos, range: number): boolean;
    read(pos: ChunkPos): CompletableFuture<Optional<CompoundTag>>;
    storageInfo(): RegionStorageInfo;
    synchronize(flush: boolean): CompletableFuture<void>;
    upgradeChunkTag(chunkTag: Dynamic<Tag>, defaultVersion: number): Dynamic<Tag>;
    upgradeChunkTag(chunkTag: CompoundTag, defaultVersion: number): CompoundTag;
    upgradeChunkTag(chunkTag: CompoundTag, defaultVersion: number, dataFixContextTag: CompoundTag, targetVersion: number): CompoundTag;
    write(pos: ChunkPos, supplier: () => CompoundTag): CompletableFuture<void>;
    write(pos: ChunkPos, value: CompoundTag): CompletableFuture<void>;
}