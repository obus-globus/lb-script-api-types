import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { MovementCorrection } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.d.ts'
import type { RotationProcessor } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/RotationProcessor.d.ts'
import type { RestrictedSingleUseAction } from '../../../../../net/ccbluex/liquidbounce/utils/client/RestrictedSingleUseAction.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * An aim plan is a plan to aim at a certain rotation.
 * It is being used to calculate the next rotation to aim at.
 *
 * @param rotation The rotation we want to aim at.
 * @param angleSmooth The mode of the smoother.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationTarget.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationTarget.kt:30}
 */
export class RotationTarget extends Object {
    constructor(rotation: Rotation, entity: Entity | null, processors: RotationProcessor[], ticksUntilReset: number, resetThreshold: number, considerInventory: boolean, movementCorrection: MovementCorrection, whenReached: RestrictedSingleUseAction | null)
    /**
     * Consider if the inventory is open or not. If the inventory is open, we might not want to continue updating.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationTarget.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationTarget.kt:59}
     */
    readonly considerInventory: boolean;
    entity: Entity | null;
    readonly movementCorrection: MovementCorrection;
    /**
     * The rotation processors which are being used to calculate the next rotation.
     * This list should start with {@link net.ccbluex.liquidbounce.utils.aiming.features.processors.anglesmooth.AngleSmooth}
     * and then continue with other processors like {@link ShortStopRotationProcessor} and {@link FailFocus}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationTarget.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationTarget.kt:41}
     */
    readonly processors: RotationProcessor[];
    /**
     * The reset threshold defines the threshold at which we are going to reset the aim plan.
     * The threshold is being calculated by the distance between the current rotation and the rotation we want to aim.
     *
     * TODO: Replace this with a fixed check that checks if our current mouse movement
     *   outperforms the threshold.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationTarget.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationTarget.kt:51}
     */
    readonly resetThreshold: number;
    readonly rotation: Rotation;
    /**
     * The ticks until reset defines the amount of ticks until we are rotating back.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationTarget.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationTarget.kt:47}
     */
    readonly ticksUntilReset: number;
    /**
     * What should be done if the target rotation has been reached. Can be `null`.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationTarget.kt#L64 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationTarget.kt:64}
     */
    readonly whenReached: RestrictedSingleUseAction | null;
    // private process(currentRotation: Rotation, targetRotation: Rotation): Rotation;
    /**
     * Calculates the next rotation to aim at.
     * {@link currentRotation} is the current rotation or rather last rotation we aimed at. It is being used to calculate the
     * next rotation.
     *
     * We might even return null if we do not want to aim at anything yet.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationTarget.kt#L70 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationTarget.kt:70}
     */
    towards(currentRotation: Rotation, isResetting: boolean): Rotation;
}