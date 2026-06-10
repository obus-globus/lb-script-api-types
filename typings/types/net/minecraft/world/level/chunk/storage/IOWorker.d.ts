import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { AtomicBoolean } from '../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { StreamTagVisitor } from '../../../../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { PriorityConsecutiveExecutor } from '../../../../../../net/minecraft/util/thread/PriorityConsecutiveExecutor.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ChunkScanAccess } from '../../../../../../net/minecraft/world/level/chunk/storage/ChunkScanAccess.d.ts'
import type { IOWorker$PendingStore } from '../../../../../../net/minecraft/world/level/chunk/storage/IOWorker$PendingStore.d.ts'
import type { IOWorker$ThrowingSupplier } from '../../../../../../net/minecraft/world/level/chunk/storage/IOWorker$ThrowingSupplier.d.ts'
import type { RegionFileStorage } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionFileStorage.d.ts'
import type { RegionStorageInfo } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
export class IOWorker extends Object implements AutoCloseable, ChunkScanAccess {
    static STORE_EMPTY: () => CompoundTag;
    constructor(info: RegionStorageInfo, dir: Path[], sync: boolean)
    // private consecutiveExecutor: PriorityConsecutiveExecutor;
    // private pendingWrites: Map<ChunkPos, IOWorker$PendingStore>;
    // private regionCacheForBlender: Long2ObjectLinkedOpenHashMap<CompletableFuture<BitSet>>;
    // private shutdownRequested: AtomicBoolean;
    // private storage: RegionFileStorage;
    close(): void;
    // private createOldDataForRegion(regionX: number, regionZ: number): CompletableFuture<BitSet>;
    // private getOrCreateOldDataForRegion(regionX: number, regionZ: number): CompletableFuture<BitSet>;
    // private isOldChunk(tag: CompoundTag): boolean;
    isOldChunkAround(pos: ChunkPos, range: number): boolean;
    loadAsync(pos: ChunkPos): CompletableFuture<Optional<CompoundTag>>;
    // private runStore(pos: ChunkPos, write: IOWorker$PendingStore): void;
    scanChunk(pos: ChunkPos, visitor: StreamTagVisitor): CompletableFuture<void>;
    storageInfo(): RegionStorageInfo;
    store(pos: ChunkPos, supplier: () => CompoundTag): CompletableFuture<void>;
    store(pos: ChunkPos, value: CompoundTag): CompletableFuture<void>;
    // private storePendingChunk(): void;
    // private submitTask<T extends Object | number | string | boolean>(task: () => T): CompletableFuture<T>;
    // private submitThrowingTask<T extends Object | number | string | boolean>(task: () => T): CompletableFuture<T>;
    synchronize(flush: boolean): CompletableFuture<void>;
    // private tellStorePending(): void;
    // private waitForShutdown(): void;
}