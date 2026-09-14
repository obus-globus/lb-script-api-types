import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Vehicle control module
 *
 * Move with your vehicle however you want.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleVehicleControl.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleVehicleControl.kt:46}
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