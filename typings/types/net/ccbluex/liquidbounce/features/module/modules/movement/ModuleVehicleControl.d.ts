import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Vehicle control module
 *
 * Move with your vehicle however you want.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleVehicleControl.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleVehicleControl.kt:45}
 */
export class ModuleVehicleControl extends ClientModule {
    static INSTANCE: ModuleVehicleControl;
    // private glide: number;
    // private /*not mapped: */ getGlide(): number;
    // private handleMovementInputEvent: EventHook<MovementInputEvent>;
    // private handleVehicleMovement: EventHook<GameTickEvent>;
    // private mouseControl: boolean;
    // private /*not mapped: */ getMouseControl(): boolean;
    // private noGlideOnSprint: boolean;
    // private /*not mapped: */ getNoGlideOnSprint(): boolean;
    // private wasInVehicle: boolean;
    onEnabled(): void;
}