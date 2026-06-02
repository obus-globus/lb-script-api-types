import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * @remarks
 * - **Anticheat:** Spartan (v4.0.4.3)
 * - **Tested on:** minecraft.vagdedes.com
 * - it will flag randomly, that's just spartan for you
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/spartan/SpeedSpartan524.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/spartan/SpeedSpartan524.kt:36}
 */
export class SpeedSpartanV4043 extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    // private moveHandler: EventHook<PlayerMoveEvent>;
    readonly parent: ModeValueGroup<Object>;
}