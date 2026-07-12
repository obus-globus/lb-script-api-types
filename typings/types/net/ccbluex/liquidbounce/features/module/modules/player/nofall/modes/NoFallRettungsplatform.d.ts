import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
/**
 * Uses an item called Rettungsplatform or Rettungskapsel to prevent fall damage.
 * This is an item of the game-mode BedWars on the server GommeHD.net
 *
 * https://www.gommehd.net/
 *
 * As such module is mostly used by German players, the name of the module is in German.
 * That is unusual for LiquidBounce, but it is the best name for this module.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallRettungsplatform.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallRettungsplatform.kt:42}
 */
export class NoFallRettungsplatform extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallRettungsplatform;
    // private /*not mapped: */ getItemToPlatform(): HotbarItemSlot | null;
    // private tickHandler: EventHook<GameTickEvent>;
}