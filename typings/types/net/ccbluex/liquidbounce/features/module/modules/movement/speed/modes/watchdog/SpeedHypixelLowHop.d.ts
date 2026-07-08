import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { SpeedBHopBase } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/SpeedBHopBase.d.ts'
import type { SpeedHypixelLowHop$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/watchdog/SpeedHypixelLowHop$Companion.d.ts'
/**
 * @anticheat Watchdog (NCP)
 * @anticheatVersion 25.01.25
 * @testedOn hypixel.net
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/watchdog/SpeedHypixelLowHop.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/watchdog/SpeedHypixelLowHop.kt:37}
 */
export class SpeedHypixelLowHop extends SpeedBHopBase {
    static Companion: Tagged$Companion;
    static Companion: SpeedHypixelLowHop$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private glide: boolean;
    // private /*not mapped: */ getGlide(): boolean;
    // private jumpHandler: EventHook<PlayerJumpEvent>;
    readonly tickHandler: EventHook<GameTickEvent>;
    // private isGroundExempt(): boolean;
}