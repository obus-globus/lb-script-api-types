import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * @anticheat Spartan
 * @anticheatVersion v4.0.4.3
 * @testedOn minecraft.vagdedes.com
 * @note it will flag randomly, that's just spartan for you. Could flag anywhere from 0-20vl if you do 180's with it on
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/spartan/SpeedSpartan524.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/spartan/SpeedSpartan524.kt:73}
 */
export class SpeedSpartanV4043FastFall extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private moveHandler: EventHook<PlayerMoveEvent>;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    disable(): void;
}