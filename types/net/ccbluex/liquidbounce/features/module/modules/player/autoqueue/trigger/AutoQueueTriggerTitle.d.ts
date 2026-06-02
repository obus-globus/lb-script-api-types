import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { TitleEvent$Title } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/TitleEvent$Title.d.ts'
import type { AutoQueueTrigger } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/trigger/AutoQueueTrigger.d.ts'
export class AutoQueueTriggerTitle extends AutoQueueTrigger {
    static Companion: Tagged$Companion;
    static INSTANCE: AutoQueueTriggerTitle;
    // private isTriggered: boolean;
    /*not mapped: */ isTriggered(): boolean;
    // private keywords: string[];
    // private /*not mapped: */ getKeywords(): string[];
    // private titleHandler: EventHook<TitleEvent$Title>;
}