import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { RotationTarget } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { MovementCorrection } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.d.ts'
import type { FailRotationProcessor } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/FailRotationProcessor.d.ts'
import type { ShortStopRotationProcessor } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/ShortStopRotationProcessor.d.ts'
import type { AngleSmooth } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/AngleSmooth.d.ts'
import type { RestrictedSingleUseAction } from '../../../../../net/ccbluex/liquidbounce/utils/client/RestrictedSingleUseAction.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * Configurable to configure the dynamic rotation engine
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.kt:39}
 */
export class RotationsValueGroup extends ValueGroup {
    constructor(owner: EventListener, movementCorrection: MovementCorrection, combatSpecific: boolean)
    // private angleSmooth: ModeValueGroup<AngleSmooth>;
    // private fail: FailRotationProcessor | null;
    // private movementCorrection: MovementCorrection;
    // private /*not mapped: */ getMovementCorrection(): MovementCorrection;
    // private resetThreshold: number;
    // private /*not mapped: */ getResetThreshold(): number;
    // private shortStop: ShortStopRotationProcessor | null;
    // private ticksUntilReset: number;
    // private /*not mapped: */ getTicksUntilReset(): number;
    /**
     * How long it takes to rotate to a rotation in ticks
     *
     * Calculates the difference from the server rotation to the target rotation and divides it by the
     * minimum turn speed (to make sure we are always there in time)
     *
     * @param rotation The rotation to rotate to
     * @returns The amount of ticks it takes to rotate to the rotation
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.kt#L94 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.kt:94}
     */
    calculateTicks(rotation: Rotation): number;
    toRotationTarget(rotation: Rotation, entity: Entity | null, considerInventory: boolean, whenReached: RestrictedSingleUseAction | null): RotationTarget;
}