import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ChatScreen$ExitReason extends Enum<ChatScreen$ExitReason> {
    static DONE: ChatScreen$ExitReason;
    static INTENTIONAL: ChatScreen$ExitReason;
    static INTERRUPTED: ChatScreen$ExitReason;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ChatScreen$ExitReason;
    static values(): ChatScreen$ExitReason[];
    private constructor()
    name(): "INTENTIONAL" | "INTERRUPTED" | "DONE";
}