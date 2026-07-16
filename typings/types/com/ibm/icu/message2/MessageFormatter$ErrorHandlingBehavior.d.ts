import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MessageFormatter$ErrorHandlingBehavior extends Enum<MessageFormatter$ErrorHandlingBehavior> {
    static BEST_EFFORT: MessageFormatter$ErrorHandlingBehavior;
    static STRICT: MessageFormatter$ErrorHandlingBehavior;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MessageFormatter$ErrorHandlingBehavior;
    static values(): MessageFormatter$ErrorHandlingBehavior[];
    private constructor()
    name(): "BEST_EFFORT" | "STRICT";
}