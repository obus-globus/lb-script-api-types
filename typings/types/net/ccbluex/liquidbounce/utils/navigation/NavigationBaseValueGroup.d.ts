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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt:41}
 */
export abstract class NavigationBaseValueGroup<T extends unknown> extends ToggleableValueGroup {
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt:63}
     */
    protected calculateGoalPosition(context: T): Vec3 | null;
    /**
     * Creates context for navigation
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt:56}
     */
    protected createNavigationContext(): T;
    /**
     * Gets rotation based on movement and target
     *
     * @returns Movement rotation
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt#L94 | src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt:94}
     */
    getMovementRotation(): Rotation;
    /**
     * Handles additional movement mechanics like swimming and jumping
     *
     * @param event Movement input event to modify
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt#L70 | src/main/kotlin/net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.kt:70}
     */
    protected handleMovementAssist(event: MovementInputEvent, context: T): void;
}