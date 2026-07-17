import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class ModuleMiddleClickAction$FriendClicker extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleMiddleClickAction$FriendClicker;
    // private clicked: boolean;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private pickUpRange: number;
    // private /*not mapped: */ getPickUpRange(): number;
    readonly repeatable: EventHook<GameTickEvent>;
}