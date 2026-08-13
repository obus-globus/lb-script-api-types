import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ScreenEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * AutoRespawn module
 *
 * Automatically respawns the player after dying.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoRespawn.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoRespawn.kt:33}
 */
export class ModuleAutoRespawn extends ClientModule {
    static INSTANCE: ModuleAutoRespawn;
    // private delay: number;
    // private /*not mapped: */ getDelay(): number;
    readonly screenHandler: EventHook<ScreenEvent>;
}