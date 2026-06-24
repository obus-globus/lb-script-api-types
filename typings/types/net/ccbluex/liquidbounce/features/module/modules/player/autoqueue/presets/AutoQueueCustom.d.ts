import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { AutoQueueAction } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/actions/AutoQueueAction.d.ts'
import type { AutoQueueTrigger } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/trigger/AutoQueueTrigger.d.ts'
export class AutoQueueCustom extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: AutoQueueCustom;
    // private actions: ModeValueGroup<AutoQueueAction>;
    /*not mapped: */ getActions$net_ccbluex_liquidbounce(): ModeValueGroup<AutoQueueAction>;
    readonly parent: ModeValueGroup<any>;
    // private tickHandler: EventHook<GameTickEvent>;
    // private triggers: ModeValueGroup<AutoQueueTrigger>;
    /*not mapped: */ getTriggers$net_ccbluex_liquidbounce(): ModeValueGroup<AutoQueueTrigger>;
    // private waitUntilWorldChange: boolean;
    // private /*not mapped: */ getWaitUntilWorldChange(): boolean;
    // private worldChange: EventHook<WorldChangeEvent>;
    // private worldChangeOccurred: boolean;
}