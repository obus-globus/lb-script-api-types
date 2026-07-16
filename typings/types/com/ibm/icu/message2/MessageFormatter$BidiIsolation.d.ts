import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MessageFormatter$BidiIsolation extends Enum<MessageFormatter$BidiIsolation> {
    static DEFAULT: MessageFormatter$BidiIsolation;
    static NONE: MessageFormatter$BidiIsolation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MessageFormatter$BidiIsolation;
    static values(): MessageFormatter$BidiIsolation[];
    private constructor()
    name(): "NONE" | "DEFAULT";
}