import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
/**
 * Bypasses BoatFly checks on anti-cheats such as Vulcan 2.9.1
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleVehicleControl.kt#L138 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleVehicleControl.kt:138}
 */
export class ModuleVehicleControl$Rehook extends ToggleableValueGroup {
    static INSTANCE: ModuleVehicleControl$Rehook;
    // private forceAttempt: boolean;
    // private handleRehooking: EventHook<GameTickEvent>;
    // private hookAfter: number;
    // private /*not mapped: */ getHookAfter(): number;
    // private unhookAfter: number;
    // private /*not mapped: */ getUnhookAfter(): number;
    // private vehicleId: number;
    /*not mapped: */ getVehicleId$net_ccbluex_liquidbounce(): number;
}