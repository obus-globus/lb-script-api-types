import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerNetworkMovementTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerNetworkMovementTickEvent.d.ts'
/**
 * @anticheat Grim
 * @anticheatVersion 2.3.60
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/shared/NoSlowSharedGrim2360.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/shared/NoSlowSharedGrim2360.kt:35}
 */
export class NoSlowSharedGrim2360 extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private onNetworkTick: EventHook<PlayerNetworkMovementTickEvent>;
    readonly parent: ModeValueGroup<any>;
}