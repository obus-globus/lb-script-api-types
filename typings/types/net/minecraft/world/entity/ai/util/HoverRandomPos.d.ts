import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class HoverRandomPos extends Object {
    static getPos(parammob: PathfinderMob, paramhorizontalDist: number, paramverticalDist: number, paramxDir: number, paramzDir: number, parammaxXzRadiansDifference: number, paramhoverMaxHeight: number, paramhoverMinHeight: number): Vec3;
    constructor()
}