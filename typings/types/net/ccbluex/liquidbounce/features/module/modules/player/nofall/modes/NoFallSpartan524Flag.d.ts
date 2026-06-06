import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
/**
 * @remarks
 * - **Anticheat:** Spartan (phase 524)
 * - **Tested on:** minecraft.vagdedes.com
 * - it gives you 6 flags for 50 blocks, which isn't enough to get kicked
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallSpartan524Flag.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallSpartan524Flag.kt:25}
 */
export class NoFallSpartan524Flag extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallSpartan524Flag;
    readonly repeatable: EventHook<GameTickEvent>;
}