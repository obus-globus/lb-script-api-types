import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { SpeedBHopBase } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/SpeedBHopBase.d.ts'
/**
 * Intave 14 speed (~8.7% faster than vanilla)
 *
 * @author larryngton
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/intave/SpeedIntave14Fast.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/intave/SpeedIntave14Fast.kt:30}
 */
export class SpeedIntave14Fast extends SpeedBHopBase {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    // private tickHandler: EventHook<GameTickEvent>;
    // private timer: boolean;
    // private /*not mapped: */ getTimer(): boolean;
}