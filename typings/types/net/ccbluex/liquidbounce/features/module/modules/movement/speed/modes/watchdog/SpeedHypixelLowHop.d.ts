import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { SpeedBHopBase } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/SpeedBHopBase.d.ts'
import type { SpeedHypixelLowHop$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/watchdog/SpeedHypixelLowHop$Companion.d.ts'
/**
 * @remarks
 * - **Anticheat:** Watchdog (NCP) (25.01.25)
 * - **Tested on:** hypixel.net
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/watchdog/SpeedHypixelLowHop.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/watchdog/SpeedHypixelLowHop.kt:32}
 */
export class SpeedHypixelLowHop extends SpeedBHopBase {
    static Companion: Tagged$Companion;
    static Companion: SpeedHypixelLowHop$Companion;
    constructor(parent: ModeValueGroup<Object>)
    // private glide: boolean;
    // private /*not mapped: */ getGlide(): boolean;
    // private jumpHandler: EventHook<PlayerJumpEvent>;
    readonly tickHandler: EventHook<GameTickEvent>;
    // private isGroundExempt(): boolean;
}