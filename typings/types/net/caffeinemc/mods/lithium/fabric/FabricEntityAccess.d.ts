import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlatformEntityAccess } from '../../../../../net/caffeinemc/mods/lithium/common/services/PlatformEntityAccess.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export class FabricEntityAccess extends Object implements PlatformEntityAccess {
    static INSTANCE: PlatformEntityAccess;
    constructor()
    addEnderDragonParts(arg0: Level, arg1: Entity, arg2: AABB, arg3: (param0: Entity) => boolean, arg4: Entity[]): void;
}