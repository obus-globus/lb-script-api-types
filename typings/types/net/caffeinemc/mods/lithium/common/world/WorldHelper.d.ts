import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityClassGroup } from '../../../../../../net/caffeinemc/mods/lithium/common/entity/EntityClassGroup.d.ts'
import type { EntityPushablePredicate } from '../../../../../../net/caffeinemc/mods/lithium/common/entity/pushable/EntityPushablePredicate.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityGetter } from '../../../../../../net/minecraft/world/level/EntityGetter.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { EntitySectionStorage } from '../../../../../../net/minecraft/world/level/entity/EntitySectionStorage.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class WorldHelper extends Object {
    static CUSTOM_TYPE_FILTERABLE_LIST_DISABLED: boolean;
    static areNeighborsWithinSameChunk(paramarg0: BlockPos): boolean;
    static areNeighborsWithinSameChunkSection(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    static arePosWithinSameChunk(paramarg0: BlockPos, paramarg1: BlockPos): boolean;
    static getEntitiesForCollision(paramarg0: EntityGetter, paramarg1: AABB, paramarg2: Entity): Entity[];
    static getEntitiesOfEntityGroupPlusDragonPieces(paramarg0: Level, paramarg1: EntitySectionStorage<Entity>, paramarg2: Entity, paramarg3: EntityClassGroup, paramarg4: AABB, paramarg5: (param0: Object) => boolean): Entity[];
    static getEntitiesOfEntityGroupWithoutDragonPieces(paramarg0: EntitySectionStorage<Entity>, paramarg1: Entity, paramarg2: EntityClassGroup, paramarg3: AABB, paramarg4: (param0: Object) => boolean): Entity[];
    static getEntityCacheOrNull(paramarg0: Level): EntitySectionStorage<Entity>;
    static getOtherEntitiesForCollision(paramarg0: EntityGetter, paramarg1: AABB, paramarg2: Entity, paramarg3: (param0: Object) => boolean): Entity[];
    static getPushableEntities(paramarg0: Level, paramarg1: EntitySectionStorage<Entity>, paramarg2: Entity, paramarg3: AABB, paramarg4: EntityPushablePredicate<Object>): Entity[];
    constructor()
}