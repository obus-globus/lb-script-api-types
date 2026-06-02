import type { FlyingPathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/FlyingPathNavigation.d.ts'
import type { HappyGhast } from '../../../../../../net/minecraft/world/entity/animal/happyghast/HappyGhast.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class HappyGhast$BabyFlyingPathNavigation extends FlyingPathNavigation {
    constructor(mob: HappyGhast, level: Level)
    canMoveDirectly(startPos: Vec3, stopPos: Vec3): boolean;
}