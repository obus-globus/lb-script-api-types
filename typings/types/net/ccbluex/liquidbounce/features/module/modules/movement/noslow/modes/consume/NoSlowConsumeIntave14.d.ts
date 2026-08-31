import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerNetworkMovementTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerNetworkMovementTickEvent.d.ts'
import type { NoSlowConsumeIntave14$Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/consume/NoSlowConsumeIntave14$Mode.d.ts'
/**
 * tested on mineblaze.net
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/consume/NoSlowConsumeIntave14.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/consume/NoSlowConsumeIntave14.kt:34}
 */
export class NoSlowConsumeIntave14 extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private mode: NoSlowConsumeIntave14$Mode;
    // private /*not mapped: */ getMode(): NoSlowConsumeIntave14$Mode;
    // private onNetworkTick: EventHook<PlayerNetworkMovementTickEvent>;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private releasePacket(): void;
}