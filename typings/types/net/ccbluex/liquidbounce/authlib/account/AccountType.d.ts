import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AccountType extends Enum<AccountType> {
    static CRACKED: AccountType;
    static MICROSOFT: AccountType;
    static SESSION: AccountType;
    static THEALTENING: AccountType;
    static getEntries(): AccountType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): AccountType;
    static values(): AccountType[];
    private constructor(commonName: string, canJoinOnline: boolean)
    readonly canJoinOnline: boolean;
    readonly commonName: string;
    name(): "MICROSOFT" | "SESSION" | "THEALTENING" | "CRACKED";
}