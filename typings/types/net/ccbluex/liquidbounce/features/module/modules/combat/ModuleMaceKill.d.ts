import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Makes the mace powerful by faking fall height.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleMaceKill.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleMaceKill.kt:34}
 */
export class ModuleMaceKill extends ClientModule {
    static INSTANCE: ModuleMaceKill;
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private fallHeight: number;
    // private /*not mapped: */ getFallHeight(): number;
    // private determineHeight(): number;
}