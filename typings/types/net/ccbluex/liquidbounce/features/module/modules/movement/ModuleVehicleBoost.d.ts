import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Vehicle Boost module
 *
 * Boosts you when leaving a vehicle.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleVehicleBoost.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleVehicleBoost.kt:33}
 */
export class ModuleVehicleBoost extends ClientModule {
    static INSTANCE: ModuleVehicleBoost;
    // private horizontalSpeed: number;
    // private /*not mapped: */ getHorizontalSpeed(): number;
    readonly repeatable: EventHook<GameTickEvent>;
    // private verticalSpeed: number;
    // private /*not mapped: */ getVerticalSpeed(): number;
    // private wasInVehicle: boolean;
}