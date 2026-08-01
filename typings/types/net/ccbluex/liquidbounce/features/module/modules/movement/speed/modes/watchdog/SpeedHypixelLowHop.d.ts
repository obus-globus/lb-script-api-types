import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/watchdog/SpeedHypixelLowHop.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/watchdog/SpeedHypixelLowHop.kt:37}
 */
export class SpeedHypixelLowHop extends SpeedBHopBase {
    static Companion: SpeedHypixelLowHop$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private glide: boolean;
    // private /*not mapped: */ getGlide(): boolean;
    // private jumpHandler: EventHook<PlayerJumpEvent>;
    readonly tickHandler: EventHook<GameTickEvent>;
    // private isGroundExempt(): boolean;
}