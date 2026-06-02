import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DefaultRandomPos extends Object {
    static getPos(parammob: PathfinderMob, paramhorizontalDist: number, paramverticalDist: number): Vec3;
    static getPosAway(parammob: PathfinderMob, paramhorizontalDist: number, paramverticalDist: number, paramavoidPos: Vec3): Vec3;
    static getPosTowards(parammob: PathfinderMob, paramhorizontalDist: number, paramverticalDist: number, paramtowardsPos: Vec3, parammaxXzRadiansFromDir: number): Vec3;
    constructor()
}