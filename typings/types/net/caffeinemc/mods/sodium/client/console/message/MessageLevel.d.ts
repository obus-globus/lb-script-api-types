import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class MessageLevel extends Enum<MessageLevel> {
    static INFO: MessageLevel;
    static SEVERE: MessageLevel;
    static WARN: MessageLevel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MessageLevel;
    static values(): (Object | null)[];
    private constructor()
    name(): "INFO" | "WARN" | "SEVERE";
}