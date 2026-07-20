import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * An eagle module
 *
 * Legit trick to build faster.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleEagle.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleEagle.kt:40}
 */
export class ModuleEagle extends ClientModule {
    static INSTANCE: ModuleEagle;
    // private currentEdgeDistance: number;
    // private edgeDistance: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getEdgeDistance(): ClosedFloatingPointRange<number>;
    // private handleMovementInput: EventHook<MovementInputEvent>;
    // private sneakCaptured: boolean;
    // private wasSneaking: boolean;
    onDisabled(): void;
    // private shouldActivateEagle(event: MovementInputEvent, conditionsMet: boolean): boolean;
    // private shouldOverrideSneak(conditionsMet: boolean, active: boolean): boolean;
    // private updateSneakCapture(originalSneak: boolean, active: boolean): void;
    // private updateSneakState(isSneaking: boolean): void;
}