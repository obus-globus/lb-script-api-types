import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerNetworkMovementTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerNetworkMovementTickEvent.d.ts'
/**
 * based off of intave consume noslow, might work on some other ac
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/consume/NoSlowConsumeRelease.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/consume/NoSlowConsumeRelease.kt:30}
 */
export class NoSlowConsumeRelease extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    // private onNetworkTick: EventHook<PlayerNetworkMovementTickEvent>;
    readonly parent: ModeValueGroup<Object>;
}