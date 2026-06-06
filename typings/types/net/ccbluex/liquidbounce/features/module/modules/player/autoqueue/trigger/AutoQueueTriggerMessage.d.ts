import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ChatReceiveEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/ChatReceiveEvent.d.ts'
import type { ChatReceiveEvent$ChatType } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/ChatReceiveEvent$ChatType.d.ts'
import type { AutoQueueTrigger } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/trigger/AutoQueueTrigger.d.ts'
/**
 * Can be used for different server that use paper to join a game
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/trigger/AutoQueueTriggerMessage.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/trigger/AutoQueueTriggerMessage.kt:26}
 */
export class AutoQueueTriggerMessage extends AutoQueueTrigger {
    static Companion: Tagged$Companion;
    static INSTANCE: AutoQueueTriggerMessage;
    // private chatReceive: EventHook<ChatReceiveEvent>;
    // private chatTypes: ChatReceiveEvent$ChatType[];
    // private /*not mapped: */ getChatTypes(): ChatReceiveEvent$ChatType[];
    // private isTriggered: boolean;
    /*not mapped: */ isTriggered(): boolean;
    // private keywords: string[];
    // private /*not mapped: */ getKeywords(): string[];
}