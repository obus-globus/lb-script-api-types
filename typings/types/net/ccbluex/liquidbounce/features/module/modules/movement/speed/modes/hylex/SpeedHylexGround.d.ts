import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
/**
 * Hylex Ground
 *
 * Works because of a silly exemption from Hylex
 * @author @liquidsquid1
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/hylex/SpeedHylexGround.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/hylex/SpeedHylexGround.kt:32}
 */
export class SpeedHylexGround extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private groundTicks: number;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private tickHandler: EventHook<GameTickEvent>;
    enable(): void;
}