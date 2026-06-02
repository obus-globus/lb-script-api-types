import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleKick$KickModeEnum } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/exploit/ModuleKick$KickModeEnum.d.ts'
/**
 * AutoLeave module
 *
 * Automatically makes you leave the server whenever your health is low.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoLeave.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoLeave.kt:28}
 */
export class ModuleAutoLeave extends ClientModule {
    static INSTANCE: ModuleAutoLeave;
    // private delay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDelay(): { start: number; endInclusive: number; step: number };
    // private health: number;
    // private /*not mapped: */ getHealth(): number;
    // private mode: ModuleKick$KickModeEnum;
    // private /*not mapped: */ getMode(): ModuleKick$KickModeEnum;
    // private tickHandler: EventHook<GameTickEvent>;
}