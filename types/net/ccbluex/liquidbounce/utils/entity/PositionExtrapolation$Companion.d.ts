import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PositionExtrapolation } from '../../../../../net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PositionExtrapolation$Companion extends Object {
    constant(pos: Vec3): PositionExtrapolation;
    getBestForEntity(target: Entity): PositionExtrapolation;
}