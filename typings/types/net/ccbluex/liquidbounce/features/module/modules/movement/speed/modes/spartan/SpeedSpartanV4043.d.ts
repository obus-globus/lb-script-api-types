import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * @anticheat Spartan
 * @anticheatVersion v4.0.4.3
 * @testedOn minecraft.vagdedes.com
 * @note it will flag randomly, that's just spartan for you
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/spartan/SpeedSpartan524.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/spartan/SpeedSpartan524.kt:42}
 */
export class SpeedSpartanV4043 extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private moveHandler: EventHook<PlayerMoveEvent>;
    readonly parent: ModeValueGroup<any>;
}