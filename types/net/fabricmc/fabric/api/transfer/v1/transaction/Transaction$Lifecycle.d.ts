import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Transaction$Lifecycle extends Enum<Transaction$Lifecycle> {
    static CLOSING: Transaction$Lifecycle;
    static NONE: Transaction$Lifecycle;
    static OPEN: Transaction$Lifecycle;
    static OUTER_CLOSING: Transaction$Lifecycle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Transaction$Lifecycle;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "OPEN" | "CLOSING" | "OUTER_CLOSING";
}