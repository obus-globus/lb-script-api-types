import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { PathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/PathNavigation.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class GoalUtils extends Object {
    static hasGroundPathNavigation(parammob: Mob): boolean;
    static hasMalus(parammob: PathfinderMob, parampos: BlockPos): boolean;
    static isNotStable(paramnavigation: PathNavigation, parampos: BlockPos): boolean;
    static isOutsideLimits(parampos: BlockPos, parammob: PathfinderMob): boolean;
    static isRestricted(paramrestrict: boolean, parammob: PathfinderMob, parampos: BlockPos): boolean;
    static isRestricted(paramrestrict: boolean, parammob: PathfinderMob, parampos: Vec3): boolean;
    static isSolid(parammob: PathfinderMob, parampos: BlockPos): boolean;
    static isWater(parammob: PathfinderMob, parampos: BlockPos): boolean;
    static mobRestricted(parammob: PathfinderMob, paramhorizontalDist: number): boolean;
    constructor()
}