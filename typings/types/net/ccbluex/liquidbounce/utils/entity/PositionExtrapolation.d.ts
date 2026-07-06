import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * A utility which predicts the position of something in n ticks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.kt:33}
 */
export interface PositionExtrapolation extends Object{
    getPositionInTicks(ticks: number): Vec3;
}