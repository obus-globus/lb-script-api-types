import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { SpeedBHopBase } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/SpeedBHopBase.d.ts'
import type { SpeedNCP$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/ncp/SpeedNCP$Companion.d.ts'
/**
 * author: @larryngton
 * tested on anticheat.test.com and eu.loyisa.cn
 * made for ncp, works on uncp and other anticheats by changing some options
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/ncp/SpeedNCP.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/ncp/SpeedNCP.kt:42}
 */
export class SpeedNCP extends SpeedBHopBase {
    static Companion: SpeedNCP$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private damageBoost: boolean;
    // private /*not mapped: */ getDamageBoost(): boolean;
    // private jumpHandler: EventHook<PlayerJumpEvent>;
    // private shouldLowHop: boolean;
    // private /*not mapped: */ getShouldLowHop(): boolean;
    // private shouldStrafeInAir: boolean;
    // private /*not mapped: */ getShouldStrafeInAir(): boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    // private timerBoost: boolean;
    // private /*not mapped: */ getTimerBoost(): boolean;
}