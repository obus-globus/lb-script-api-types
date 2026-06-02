import type { Regex } from '../../../../../../../../kotlin/text/Regex.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ChatReceiveEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/ChatReceiveEvent.d.ts'
export class AntiSpam extends ToggleableValueGroup {
    static INSTANCE: AntiSpam;
    readonly chatHandler: EventHook<ChatReceiveEvent>;
    // private regexFilters: Regex[];
    // private /*not mapped: */ getRegexFilters(): Regex[];
    // private stack: boolean;
    // private /*not mapped: */ getStack(): boolean;
}