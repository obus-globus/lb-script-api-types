import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ChatComponent$Draft } from '../../../../../net/minecraft/client/gui/components/ChatComponent$Draft.d.ts'
export class ChatComponent$ChatMethod extends Enum<ChatComponent$ChatMethod> {
    static COMMAND: ChatComponent$ChatMethod;
    static MESSAGE: ChatComponent$ChatMethod;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ChatComponent$ChatMethod;
    static values(): ChatComponent$ChatMethod[];
    private constructor(prefix: string)
    // private prefix: string;
    isDraftRestorable(draft: ChatComponent$Draft): boolean;
    prefix(): string;
    name(): "MESSAGE" | "COMMAND";
}