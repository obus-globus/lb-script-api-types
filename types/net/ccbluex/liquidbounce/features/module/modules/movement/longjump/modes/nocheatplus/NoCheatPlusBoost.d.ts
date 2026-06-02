import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * @remarks
 * - **Anticheat:** NoCheatPlus (3.16.1-SNAPSHOT-sMD5NET-b115s)
 * - **Tested on:** eu.loyisa.cn
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/longjump/modes/nocheatplus/NoCheatPlusBoost.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/longjump/modes/nocheatplus/NoCheatPlusBoost.kt:32}
 */
export class NoCheatPlusBoost extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoCheatPlusBoost;
    readonly moveHandler: EventHook<PlayerMoveEvent>;
    readonly ncpBoost: number;
    readonly parent: ModeValueGroup<Object>;
    readonly repeatable: EventHook<GameTickEvent>;
}