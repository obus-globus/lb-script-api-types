import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class LongJumpUtil extends Object {
    static calculateJumpVectorForAngle(parambody: Mob, paramtargetPos: Vec3, parammaxJumpVelocity: number, paramangle: number, paramcheckCollision: boolean): Optional<Vec3>;
    constructor()
}