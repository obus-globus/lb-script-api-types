import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ScreenEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * AutoRespawn module
 *
 * Automatically respawns the player after dying.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoRespawn.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoRespawn.kt:28}
 */
export class ModuleAutoRespawn extends ClientModule {
    static INSTANCE: ModuleAutoRespawn;
    // private delay: number;
    // private /*not mapped: */ getDelay(): number;
    readonly screenHandler: EventHook<ScreenEvent>;
}