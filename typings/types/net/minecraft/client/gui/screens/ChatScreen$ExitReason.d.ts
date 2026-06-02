import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ChatScreen$ExitReason extends Enum<ChatScreen$ExitReason> {
    static DONE: ChatScreen$ExitReason;
    static INTENTIONAL: ChatScreen$ExitReason;
    static INTERRUPTED: ChatScreen$ExitReason;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ChatScreen$ExitReason;
    static values(): (Object | null)[];
    private constructor()
    name(): "INTENTIONAL" | "INTERRUPTED" | "DONE";
}