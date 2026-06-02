import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ChatReceiveEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/ChatReceiveEvent.d.ts'
import type { DisconnectEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/DisconnectEvent.d.ts'
import type { SessionEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/SessionEvent.d.ts'
export class ReportHelperAutoReport extends ToggleableValueGroup {
    static INSTANCE: ReportHelperAutoReport;
    // private chance: number;
    // private /*not mapped: */ getChance(): number;
    // private chatHandler: EventHook<ChatReceiveEvent>;
    // private delay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDelay(): { start: number; endInclusive: number; step: number };
    // private disconnectHandler: EventHook<DisconnectEvent>;
    // private pattern: string;
    // private /*not mapped: */ getPattern(): string;
    // private reported: string[];
    // private sessionHandler: EventHook<SessionEvent>;
    onDisabled(): void;
}