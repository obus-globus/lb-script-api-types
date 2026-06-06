import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Vehicle Boost module
 *
 * Boosts you when leaving a vehicle.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleVehicleBoost.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleVehicleBoost.kt:28}
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