import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerAfterJumpEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerAfterJumpEvent.d.ts'
import type { SpeedBHopBase } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/SpeedBHopBase.d.ts'
export class SpeedSpeedYPort extends SpeedBHopBase {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    // private afterJumpHandler: EventHook<PlayerAfterJumpEvent>;
    // private speed: number;
    // private /*not mapped: */ getSpeed(): number;
    // private tickHandler: EventHook<GameTickEvent>;
}