import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { AutoQueueAction } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/actions/AutoQueueAction.d.ts'
export class AutoQueueActionChat extends AutoQueueAction {
    static Companion: Tagged$Companion;
    static INSTANCE: AutoQueueActionChat;
    // private messageDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getMessageDelay(): { start: number; endInclusive: number; step: number };
    // private messages: string[];
    // private /*not mapped: */ getMessages(): string[];
    // private startDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getStartDelay(): { start: number; endInclusive: number; step: number };
    execute(): void;
}