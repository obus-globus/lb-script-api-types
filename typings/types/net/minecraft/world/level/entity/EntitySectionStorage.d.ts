import type { Long2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectFunction.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { LongStream } from '../../../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkAwareEntityIterable } from '../../../../../net/caffeinemc/mods/lithium/common/world/ChunkAwareEntityIterable.d.ts'
import type { AbortableIterationConsumer } from '../../../../../net/minecraft/util/AbortableIterationConsumer.d.ts'
import type { AbortableIterationConsumer$Continuation } from '../../../../../net/minecraft/util/AbortableIterationConsumer$Continuation.d.ts'
import type { EntityAccess } from '../../../../../net/minecraft/world/level/entity/EntityAccess.d.ts'
import type { EntitySection } from '../../../../../net/minecraft/world/level/entity/EntitySection.d.ts'
import type { EntityTypeTest } from '../../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
import type { Visibility } from '../../../../../net/minecraft/world/level/entity/Visibility.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export class EntitySectionStorage<T extends EntityAccess> extends Object implements ChunkAwareEntityIterable<EntityAccess> {
    static CHONKY_ENTITY_SEARCH_GRACE: number;
    static MAX_NON_CHONKY_ENTITY_SIZE: number;
    constructor(entityClass: Class<T>, intialSectionVisibility: (param0: Visibility) => unknown)
    // private entityClass: Class<T>;
    // private intialSectionVisibility: (param0: Visibility) => unknown;
    // private sectionIds: (Object | null)[];
    // private sections: Long2ObjectMap<EntitySection<T>>;
    // private consumeSection(arg0: number, arg1: (param0: Object) => net.minecraft.util.AbortableIterationConsumer.Continuation): AbortableIterationConsumer$Continuation;
    count(): number;
    // private createSection(sectionPos: number): EntitySection<T>;
    forEachAccessibleNonEmptySection(bb: AABB, output: (param0: EntitySection<T>) => net.minecraft.util.AbortableIterationConsumer.Continuation): void;
    // private forEachInColumn(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (param0: Object) => net.minecraft.util.AbortableIterationConsumer.Continuation): AbortableIterationConsumer$Continuation;
    getAllChunksWithExistingSections(): (Object | null)[];
    // private getChunkSections(x: number, z: number): (Object | null)[];
    getEntities(type: EntityTypeTest<T, U>, bb: AABB, consumer: (param0: U) => net.minecraft.util.AbortableIterationConsumer.Continuation): void;
    getEntities(bb: AABB, output: (param0: T) => net.minecraft.util.AbortableIterationConsumer.Continuation): void;
    getExistingSectionPositionsInChunk(chunkKey: number): LongStream;
    getExistingSectionsInChunk(chunkKey: number): Stream<EntitySection<T>>;
    getOrCreateSection(key: number): EntitySection<T>;
    getSection(key: number): EntitySection<T>;
    lithium$IterateEntitiesInTrackedSections(): (Object | null)[];
    remove(sectionKey: number): void;
}