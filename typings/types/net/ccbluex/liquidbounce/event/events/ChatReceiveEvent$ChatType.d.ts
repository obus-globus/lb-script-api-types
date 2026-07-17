import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Received-chat message type: CHAT_MESSAGE, DISGUISED_CHAT_MESSAGE or GAME_MESSAGE.
 */
export class ChatReceiveEvent$ChatType extends Enum<ChatReceiveEvent$ChatType> implements Tagged {
    static CHAT_MESSAGE: ChatReceiveEvent$ChatType;
    static Companion: Tagged$Companion;
    static DISGUISED_CHAT_MESSAGE: ChatReceiveEvent$ChatType;
    static GAME_MESSAGE: ChatReceiveEvent$ChatType;
    static getEntries(): ChatReceiveEvent$ChatType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ChatReceiveEvent$ChatType;
    static values(): ChatReceiveEvent$ChatType[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "CHAT_MESSAGE" | "DISGUISED_CHAT_MESSAGE" | "GAME_MESSAGE";
}