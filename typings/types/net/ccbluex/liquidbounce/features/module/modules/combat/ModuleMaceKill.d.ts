import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Makes the mace powerful by faking fall height.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleMaceKill.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleMaceKill.kt:34}
 */
export class ModuleMaceKill extends ClientModule {
    static INSTANCE: ModuleMaceKill;
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private fallHeight: number;
    // private /*not mapped: */ getFallHeight(): number;
    // private determineHeight(): number;
}