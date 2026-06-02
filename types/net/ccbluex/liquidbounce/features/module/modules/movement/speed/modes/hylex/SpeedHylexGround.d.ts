import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
/**
 * Hylex Ground
 *
 * Works because of a silly exemption from Hylex
 *
 * @author @liquidsquid1
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/hylex/SpeedHylexGround.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/hylex/SpeedHylexGround.kt:26}
 */
export class SpeedHylexGround extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    // private groundTicks: number;
    readonly parent: ModeValueGroup<Object>;
    // private tickHandler: EventHook<GameTickEvent>;
    enable(): void;
}