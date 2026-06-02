import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { AllowAutoJumpEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/AllowAutoJumpEvent.d.ts'
import type { MovementInputEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { SprintEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/SprintEvent.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { DirectionalInput } from '../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
import type { NavigationBaseValueGroup$AutoAction } from '../../../../../net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup$AutoAction.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Base class for navigation-related features that handles common movement functionality
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt:38}
 */
export abstract class NavigationBaseValueGroup<T extends Object | number | string | boolean> extends ToggleableValueGroup {
    constructor(parent: EventListener | null, name: string, enabled: boolean)
    // private autoAction: NavigationBaseValueGroup$AutoAction[];
    // private /*not mapped: */ getAutoAction(): NavigationBaseValueGroup$AutoAction[];
    // private /*not mapped: */ getAutoJump(): boolean;
    // private autoJumpHandler: EventHook<AllowAutoJumpEvent>;
    // private /*not mapped: */ getAutoSprint(): boolean;
    // private /*not mapped: */ getAutoSwim(): boolean;
    // private inputHandler: EventHook<MovementInputEvent>;
    // private sprintHandler: EventHook<SprintEvent>;
    // private calculateDirectionalInput(currentInput: DirectionalInput, goal: Vec3): DirectionalInput;
    /**
     * Calculates the desired position to move towards
     *
     * @returns Target position as Vec3d
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt:58}
     */
    protected calculateGoalPosition(context: T): Vec3 | null;
    /**
     * Creates context for navigation
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt:53}
     */
    protected createNavigationContext(): T;
    /**
     * Gets rotation based on movement and target
     *
     * @returns Movement rotation
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt#L89 | src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt:89}
     */
    getMovementRotation(): Rotation;
    /**
     * Handles additional movement mechanics like swimming and jumping
     *
     * @param event Movement input event to modify
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt:65}
     */
    protected handleMovementAssist(event: MovementInputEvent, context: T): void;
}