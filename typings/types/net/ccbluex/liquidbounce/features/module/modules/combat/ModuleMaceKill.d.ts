import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Makes the mace powerful by faking fall height.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleMaceKill.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleMaceKill.kt:31}
 */
export class ModuleMaceKill extends ClientModule {
    static INSTANCE: ModuleMaceKill;
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private fallHeight: number;
    // private /*not mapped: */ getFallHeight(): number;
    // private determineHeight(): number;
}