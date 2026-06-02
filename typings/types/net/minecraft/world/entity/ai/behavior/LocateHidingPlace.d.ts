import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
export class LocateHidingPlace extends Object {
    static create(paramradius: number, paramspeedModifier: number, paramcloseEnoughDist: number): OneShot<LivingEntity>;
    constructor()
}