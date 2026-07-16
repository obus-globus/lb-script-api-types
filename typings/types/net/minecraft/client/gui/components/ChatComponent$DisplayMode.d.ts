import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ChatComponent$DisplayMode extends Enum<ChatComponent$DisplayMode> {
    static BACKGROUND: ChatComponent$DisplayMode;
    static FOREGROUND: ChatComponent$DisplayMode;
    static FOREGROUND_RESTRICTED: ChatComponent$DisplayMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ChatComponent$DisplayMode;
    static values(): ChatComponent$DisplayMode[];
    private constructor(foreground: boolean, showRestrictedPrompt: boolean)
    foreground: boolean;
    showRestrictedPrompt: boolean;
    name(): "BACKGROUND" | "FOREGROUND" | "FOREGROUND_RESTRICTED";
}