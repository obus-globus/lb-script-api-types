import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { EntityTypeTest } from '../../../../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
export interface PlayerDetector$EntitySelector extends Object{
    getEntities(level: ServerLevel, type: EntityTypeTest<Entity, T>, bb: AABB, selector: (param0: T) => kotlin.Boolean): T[];
    getPlayers(level: ServerLevel, selector: (param0: Player) => kotlin.Boolean): Player[];
}