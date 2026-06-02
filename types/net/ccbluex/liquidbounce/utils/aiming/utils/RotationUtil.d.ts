import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class RotationUtil extends Object {
    static INSTANCE: RotationUtil;
    readonly gcd: number;
    /**
     * Calculate difference between two angle points
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationUtil.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationUtil.kt:66}
     */
    angleDifference(a: number, b: number): number;
    /**
     * Calculates the angle between the cross-hair and the entity.
     *
     * Useful for deciding if the player is looking at something or not.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationUtil.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationUtil.kt:52}
     */
    crosshairAngleToEntity(entity: Entity): number;
}