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
 * - it will flag randomly, that's just spartan for you. Could flag anywhere from 0-20vl if you do 180's with it on
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/spartan/SpeedSpartan524.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/spartan/SpeedSpartan524.kt:67}
 */
export class SpeedSpartanV4043FastFall extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    // private moveHandler: EventHook<PlayerMoveEvent>;
    readonly parent: ModeValueGroup<Object>;
    disable(): void;
}