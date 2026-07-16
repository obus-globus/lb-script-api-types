import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PositionExtrapolation } from '../../../../../net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.d.ts'
import type { PositionExtrapolation$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation$Companion.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * A utility class which assumes that the subject is moving at a specified speed.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.kt:53}
 */
export class LinearPositionExtrapolation extends Object implements PositionExtrapolation {
    static Companion: PositionExtrapolation$Companion;
    static constant(pos: Vec3): PositionExtrapolation;
    static getBestForEntity(target: Entity): PositionExtrapolation;
    constructor(entity: Entity)
    constructor(basePosition: Vec3, velocity: Vec3)
    // private basePosition: Vec3;
    // private velocity: Vec3;
    getPositionInTicks(ticks: number): Vec3;
}