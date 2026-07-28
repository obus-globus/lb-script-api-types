import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * A utility which predicts the position of something in n ticks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.kt:33}
 */
export interface PositionExtrapolation extends Object{
    getPositionInTicks(ticks: number): Vec3;
}