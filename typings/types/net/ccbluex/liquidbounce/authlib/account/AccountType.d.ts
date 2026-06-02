import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AccountType extends Enum<AccountType> {
    static CRACKED: AccountType;
    static MICROSOFT: AccountType;
    static SESSION: AccountType;
    static THEALTENING: AccountType;
    static getEntries(): AccountType[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AccountType;
    static values(): (Object | null)[];
    private constructor(commonName: string, canJoinOnline: boolean)
    readonly canJoinOnline: boolean;
    readonly commonName: string;
    name(): "MICROSOFT" | "SESSION" | "THEALTENING" | "CRACKED";
}