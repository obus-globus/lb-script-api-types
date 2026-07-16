import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Transaction$Lifecycle extends Enum<Transaction$Lifecycle> {
    static CLOSING: Transaction$Lifecycle;
    static NONE: Transaction$Lifecycle;
    static OPEN: Transaction$Lifecycle;
    static OUTER_CLOSING: Transaction$Lifecycle;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Transaction$Lifecycle;
    static values(): Transaction$Lifecycle[];
    private constructor()
    name(): "NONE" | "OPEN" | "CLOSING" | "OUTER_CLOSING";
}