import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class MessageLevel extends Enum<MessageLevel> {
    static INFO: MessageLevel;
    static SEVERE: MessageLevel;
    static WARN: MessageLevel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MessageLevel;
    static values(): MessageLevel[];
    private constructor()
    name(): "INFO" | "WARN" | "SEVERE";
}