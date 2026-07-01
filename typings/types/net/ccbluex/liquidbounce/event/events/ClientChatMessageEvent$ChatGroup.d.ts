import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
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
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientChatMessageEvent$ChatGroup;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "PUBLIC_CHAT" | "PRIVATE_CHAT";
}