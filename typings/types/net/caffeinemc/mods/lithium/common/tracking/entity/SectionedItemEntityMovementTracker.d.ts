import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { SectionedEntityMovementTracker } from '../../../../../../../net/caffeinemc/mods/lithium/common/tracking/entity/SectionedEntityMovementTracker.d.ts'
import type { WorldSectionBox } from '../../../../../../../net/caffeinemc/mods/lithium/common/util/tuples/WorldSectionBox.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class SectionedItemEntityMovementTracker<S extends Entity> extends SectionedEntityMovementTracker<Entity> {
    static registerAt<S extends Entity>(paramarg0: ServerLevel, paramarg1: AABB, paramarg2: Class<S>): SectionedItemEntityMovementTracker<S>;
    constructor(arg0: WorldSectionBox, arg1: Class<S>)
    getEntities(arg0: AABB): S[];
}