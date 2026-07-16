import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TransactionContext$Result extends Enum<TransactionContext$Result> {
    static ABORTED: TransactionContext$Result;
    static COMMITTED: TransactionContext$Result;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TransactionContext$Result;
    static values(): TransactionContext$Result[];
    private constructor()
    wasAborted(): boolean;
    wasCommitted(): boolean;
    name(): "ABORTED" | "COMMITTED";
}