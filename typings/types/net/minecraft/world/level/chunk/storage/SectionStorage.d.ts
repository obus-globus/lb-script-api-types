import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Dynamic } from '../../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { BiFunction } from '../../../../../../java/util/function/BiFunction.d.ts'
import type { BooleanSupplier } from '../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FunLongAnd5 } from '../../../../../../net/caffeinemc/mods/lithium/common/util/functions/FunLongAnd5.d.ts'
import type { RegionBasedStorageSectionExtended } from '../../../../../../net/caffeinemc/mods/lithium/common/world/interests/RegionBasedStorageSectionExtended.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelHeightAccessor } from '../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { ChunkIOErrorReporter } from '../../../../../../net/minecraft/world/level/chunk/storage/ChunkIOErrorReporter.d.ts'
import type { SectionStorage$PackedChunk } from '../../../../../../net/minecraft/world/level/chunk/storage/SectionStorage$PackedChunk.d.ts'
import type { SimpleRegionStorage } from '../../../../../../net/minecraft/world/level/chunk/storage/SimpleRegionStorage.d.ts'
export class SectionStorage<R extends unknown, P extends unknown> extends Object implements AutoCloseable, RegionBasedStorageSectionExtended<Object> {
    constructor(simpleRegionStorage: SimpleRegionStorage, codec: Codec<P>, packer: (param0: R) => P, unpacker: (param0: P, param1: () => void) => R, factory: (param0: () => void) => R, registryAccess: RegistryAccess, errorReporter: ChunkIOErrorReporter, levelHeightAccessor: LevelHeightAccessor)
    // private codec: Codec<P>;
    // private columns: JavaMap<any, any>;
    // private dirtyChunks: (Object | null)[];
    // private errorReporter: ChunkIOErrorReporter;
    // private factory: (param0: () => void) => R;
    // private levelHeightAccessor: LevelHeightAccessor;
    // private loadLock: Object;
    // private loadedChunks: (Object | null)[];
    // private packer: (param0: R) => P;
    // private pendingLoads: JavaMap<any, any>;
    // private registryAccess: RegistryAccess;
    // private simpleRegionStorage: SimpleRegionStorage;
    // private storage: JavaMap<any, any>;
    // private unpacker: (param0: P, param1: () => void) => R;
    close(): void;
    flush(chunkPos: ChunkPos): void;
    flushAll(): void;
    get(sectionPos: number): Optional<R>;
    getOrCreate(sectionPos: number): R;
    getOrLoad(sectionPos: number): Optional<R>;
    hasWork(): boolean;
    lithium$getChunkYMaxInclusive(): number;
    lithium$getChunkYMin(): number;
    lithium$getElementAt(arg0: number): Optional<Object>;
    lithium$getFirstInRangeInChunkColumn(arg0: number, arg1: number, arg2: number, arg3: BlockPos, arg4: number, arg5: (param0: Object, param1: Object, param2: Object, param3: Object, param4: Object, param5: number) => Object, arg6: (param0: Object) => boolean, arg7: (param0: Object) => boolean, arg8: Object): Object;
    lithium$getInChunkColumn(arg0: number, arg1: number): (Object | null)[];
    lithium$getNonEmptyPOISections(arg0: number, arg1: number): BitSet;
    // private onEntryAdded(arg0: number, arg1: Optional<Object>): void;
    // private onEntryRemoved(arg0: number, arg1: Optional<Object>): void;
    onSectionLoad(sectionPos: number): void;
    outsideStoredRange(sectionPos: number): boolean;
    prefetch(chunkPos: ChunkPos): CompletableFuture<Object>;
    setDirty(sectionPos: number): void;
    tick(haveTime: () => boolean): void;
    // private tryRead(chunkPos: ChunkPos): CompletableFuture<Optional<SectionStorage$PackedChunk<P>>>;
    // private unpackChunk(chunkPos: ChunkPos): void;
    // private unpackChunk(pos: ChunkPos, packedChunk: SectionStorage$PackedChunk<P>): void;
    // private unpackPendingLoads(): void;
    // private writeChunk(chunkPos: ChunkPos): void;
    // private writeChunk<T extends unknown>(chunkPos: ChunkPos, ops: DynamicOps<T>): Dynamic<T>;
}