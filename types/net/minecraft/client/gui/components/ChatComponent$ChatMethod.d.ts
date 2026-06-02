import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ChatComponent$Draft } from '../../../../../net/minecraft/client/gui/components/ChatComponent$Draft.d.ts'
export class ChatComponent$ChatMethod extends Enum<ChatComponent$ChatMethod> {
    static COMMAND: ChatComponent$ChatMethod;
    static MESSAGE: ChatComponent$ChatMethod;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ChatComponent$ChatMethod;
    static values(): (Object | null)[];
    private constructor(prefix: string)
    // private prefix: string;
    isDraftRestorable(draft: ChatComponent$Draft): boolean;
    prefix(): string;
    name(): "MESSAGE" | "COMMAND";
}