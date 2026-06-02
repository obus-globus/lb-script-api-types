import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PositionedEntityTrackingSection } from '../../../../../net/caffeinemc/mods/lithium/common/entity/PositionedEntityTrackingSection.d.ts'
import type { EntityPushablePredicate } from '../../../../../net/caffeinemc/mods/lithium/common/entity/pushable/EntityPushablePredicate.d.ts'
import type { FeetBlockCachingEntity } from '../../../../../net/caffeinemc/mods/lithium/common/entity/pushable/FeetBlockCachingEntity.d.ts'
import type { EntityMovementTrackerSection } from '../../../../../net/caffeinemc/mods/lithium/common/tracking/entity/EntityMovementTrackerSection.d.ts'
import type { SectionedEntityMovementTracker } from '../../../../../net/caffeinemc/mods/lithium/common/tracking/entity/SectionedEntityMovementTracker.d.ts'
import type { ClimbingMobCachingSection } from '../../../../../net/caffeinemc/mods/lithium/common/world/ClimbingMobCachingSection.d.ts'
import type { EntitySectionAccessor } from '../../../../../net/caffeinemc/mods/lithium/mixin/block/hopper/EntitySectionAccessor.d.ts'
import type { EntitySectionAccessor } from '../../../../../net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/spawning/EntitySectionAccessor.d.ts'
import type { EntitySectionAccessor } from '../../../../../net/caffeinemc/mods/lithium/mixin/util/accessors/EntitySectionAccessor.d.ts'
import type { AbortableIterationConsumer } from '../../../../../net/minecraft/util/AbortableIterationConsumer.d.ts'
import type { AbortableIterationConsumer$Continuation } from '../../../../../net/minecraft/util/AbortableIterationConsumer$Continuation.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { EntityAccess } from '../../../../../net/minecraft/world/level/entity/EntityAccess.d.ts'
import type { EntitySectionStorage } from '../../../../../net/minecraft/world/level/entity/EntitySectionStorage.d.ts'
import type { EntityTypeTest } from '../../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
import type { Visibility } from '../../../../../net/minecraft/world/level/entity/Visibility.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export class EntitySection<T extends EntityAccess> extends Object implements PositionedEntityTrackingSection, EntityMovementTrackerSection, ClimbingMobCachingSection, EntitySectionAccessor<Object>, EntitySectionAccessor<Object>, EntitySectionAccessor<Object> {
    constructor(entityClass: Class<T>, chunkStatus: Visibility)
    // private chunkStatus: Visibility;
    // private entityMovementListenersByType: Object[][];
    // private lastEntityMovementByType: number[];
    // private pos: number;
    // private pushableEntities: Object[];
    // private sectionVisibilityListeners: Object[];
    // private storage: T[];
    add(entity: T): void;
    getEntities(): Stream<T>;
    getEntities(type: EntityTypeTest<T, U>, bb: AABB, consumer: (param0: U) => net.minecraft.util.AbortableIterationConsumer.Continuation): AbortableIterationConsumer$Continuation;
    getEntities(bb: AABB, entities: (param0: T) => net.minecraft.util.AbortableIterationConsumer.Continuation): AbortableIterationConsumer$Continuation;
    getStatus(): Visibility;
    isEmpty(): boolean;
    lithium$addListener(arg0: SectionedEntityMovementTracker<EntityAccess>): void;
    lithium$collectPushableEntities(arg0: Level, arg1: Entity, arg2: AABB, arg3: EntityPushablePredicate<Object>, arg4: Object[]): AbortableIterationConsumer$Continuation;
    lithium$getChangeTime(arg0: number): number;
    lithium$getPos(): number;
    lithium$listenToMovementOnce(arg0: SectionedEntityMovementTracker<EntityAccess>, arg1: number): void;
    lithium$onEntityModifiedCachedBlock(arg0: FeetBlockCachingEntity, arg1: BlockState): void;
    lithium$removeListenToMovementOnce(arg0: SectionedEntityMovementTracker<EntityAccess>, arg1: number): void;
    lithium$removeListener(arg0: EntitySectionStorage<EntityAccess>, arg1: SectionedEntityMovementTracker<EntityAccess>): void;
    lithium$setPos(arg0: number): void;
    lithium$trackEntityMovement(arg0: number, arg1: number): void;
    // private onStartClimbingCachingEntity(arg0: Entity): void;
    remove(entity: T): boolean;
    size(): number;
    // private startFilteringPushableEntities(): void;
    // private stopFilteringPushableEntities(): void;
    updateChunkStatus(chunkStatus: Visibility): Visibility;
    // private updatePushabilityOnCachedStateChange(arg0: FeetBlockCachingEntity, arg1: BlockState): void;
}