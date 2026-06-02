import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class AirRandomPos extends Object {
    static getPosTowards(parammob: PathfinderMob, paramhorizontalDist: number, paramverticalDist: number, paramflyingHeight: number, paramtowardsPos: Vec3, parammaxXzRadiansFromDir: number): Vec3;
    constructor()
}