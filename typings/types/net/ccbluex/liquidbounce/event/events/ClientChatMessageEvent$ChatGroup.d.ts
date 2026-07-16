import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Client-chat message group: PUBLIC_CHAT or PRIVATE_CHAT.
 */
export class ClientChatMessageEvent$ChatGroup extends Enum<ClientChatMessageEvent$ChatGroup> implements Tagged {
    static Companion: Tagged$Companion;
    static PRIVATE_CHAT: ClientChatMessageEvent$ChatGroup;
    static PUBLIC_CHAT: ClientChatMessageEvent$ChatGroup;
    static getEntries(): ClientChatMessageEvent$ChatGroup[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ClientChatMessageEvent$ChatGroup;
    static values(): ClientChatMessageEvent$ChatGroup[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "PUBLIC_CHAT" | "PRIVATE_CHAT";
}