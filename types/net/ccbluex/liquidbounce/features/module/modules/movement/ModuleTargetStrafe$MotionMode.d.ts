import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
export class ModuleTargetStrafe$MotionMode extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleTargetStrafe$MotionMode;
    // private hypixel: boolean;
    // private /*not mapped: */ getHypixel(): boolean;
    // private moveHandler: EventHook<PlayerMoveEvent>;
    readonly parent: ModeValueGroup<Mode>;
}