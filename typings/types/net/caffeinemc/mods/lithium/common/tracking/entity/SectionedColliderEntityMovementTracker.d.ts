import type { SectionedEntityMovementTracker } from '../../../../../../../net/caffeinemc/mods/lithium/common/tracking/entity/SectionedEntityMovementTracker.d.ts'
import type { WorldSectionBox } from '../../../../../../../net/caffeinemc/mods/lithium/common/util/tuples/WorldSectionBox.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class SectionedColliderEntityMovementTracker extends SectionedEntityMovementTracker<Entity> {
    static ENABLED: boolean;
    static registerAt(paramarg0: ServerLevel, paramarg1: AABB): SectionedColliderEntityMovementTracker;
    constructor(arg0: WorldSectionBox)
}