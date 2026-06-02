import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Breeze } from '../../../../../../net/minecraft/world/entity/monster/breeze/Breeze.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BreezeUtil extends Object {
    static hasLineOfSight(parambreeze: Breeze, paramtarget: Vec3): boolean;
    static randomPointBehindTarget(paramenemy: LivingEntity, paramrandom: RandomSource): Vec3;
    constructor()
}