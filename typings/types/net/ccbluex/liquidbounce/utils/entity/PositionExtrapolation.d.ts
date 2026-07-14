import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * A utility which predicts the position of something in n ticks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.kt:33}
 */
export interface PositionExtrapolation extends Object{
    getPositionInTicks(ticks: number): Vec3;
}