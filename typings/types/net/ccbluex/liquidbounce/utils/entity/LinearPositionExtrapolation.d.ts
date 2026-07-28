import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PositionExtrapolation } from '../../../../../net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.d.ts'
import type { PositionExtrapolation$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation$Companion.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * A utility class which assumes that the subject is moving at a specified speed.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.kt:53}
 */
export class LinearPositionExtrapolation extends Object implements PositionExtrapolation {
    static Companion: PositionExtrapolation$Companion;
    constructor(entity: Entity)
    constructor(basePosition: Vec3, velocity: Vec3)
    // private basePosition: Vec3;
    // private velocity: Vec3;
    getPositionInTicks(ticks: number): Vec3;
}