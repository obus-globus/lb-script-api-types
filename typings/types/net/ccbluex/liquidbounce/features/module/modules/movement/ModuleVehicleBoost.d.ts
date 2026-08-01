import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Vehicle Boost module
 *
 * Boosts you when leaving a vehicle.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleVehicleBoost.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleVehicleBoost.kt:33}
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