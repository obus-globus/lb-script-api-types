import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerSafeWalkEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerSafeWalkEvent.d.ts'
export class ModuleSafeWalk$Safe extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Mode>)
    readonly parent: ModeValueGroup<Mode>;
    readonly safeWalkHandler: EventHook<PlayerSafeWalkEvent>;
}