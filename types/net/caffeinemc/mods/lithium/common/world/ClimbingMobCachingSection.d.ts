import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityPushablePredicate } from '../../../../../../net/caffeinemc/mods/lithium/common/entity/pushable/EntityPushablePredicate.d.ts'
import type { FeetBlockCachingEntity } from '../../../../../../net/caffeinemc/mods/lithium/common/entity/pushable/FeetBlockCachingEntity.d.ts'
import type { AbortableIterationConsumer$Continuation } from '../../../../../../net/minecraft/util/AbortableIterationConsumer$Continuation.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
export interface ClimbingMobCachingSection extends Object{
    lithium$collectPushableEntities(arg0: Level, arg1: Entity, arg2: AABB, arg3: EntityPushablePredicate<Entity>, arg4: Entity[]): AbortableIterationConsumer$Continuation;
    lithium$onEntityModifiedCachedBlock(arg0: FeetBlockCachingEntity, arg1: BlockState): void;
}