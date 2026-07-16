import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class RowIdLifetime extends Enum<RowIdLifetime> {
    static ROWID_UNSUPPORTED: RowIdLifetime;
    static ROWID_VALID_FOREVER: RowIdLifetime;
    static ROWID_VALID_OTHER: RowIdLifetime;
    static ROWID_VALID_SESSION: RowIdLifetime;
    static ROWID_VALID_TRANSACTION: RowIdLifetime;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RowIdLifetime;
    static values(): RowIdLifetime[];
    private constructor()
    name(): "ROWID_UNSUPPORTED" | "ROWID_VALID_OTHER" | "ROWID_VALID_SESSION" | "ROWID_VALID_TRANSACTION" | "ROWID_VALID_FOREVER";
}