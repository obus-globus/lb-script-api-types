import type { ToDoubleFunction } from '../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class LandRandomPos extends Object {
    static generateRandomPosTowardDirection(parammob: PathfinderMob, paramhorizontalDist: number, paramrestrict: boolean, paramdirection: BlockPos): BlockPos;
    static getPos(parammob: PathfinderMob, paramhorizontalDist: number, paramverticalDist: number): Vec3;
    static getPos(parammob: PathfinderMob, paramhorizontalDist: number, paramverticalDist: number, parampositionWeight: (param0: BlockPos) => kotlin.Double): Vec3;
    static getPosAway(parammob: PathfinderMob, paramminHorizontalDist: number, parammaxHorizontalDist: number, paramverticalDist: number, paramavoidPos: Vec3): Vec3;
    static getPosAway(parammob: PathfinderMob, paramhorizontalDist: number, paramverticalDist: number, paramavoidPos: Vec3): Vec3;
    static getPosTowards(parammob: PathfinderMob, paramhorizontalDist: number, paramverticalDist: number, paramtowardsPos: Vec3): Vec3;
    static movePosUpOutOfSolid(parammob: PathfinderMob, parampos: BlockPos): BlockPos;
    constructor()
}